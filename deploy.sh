#!/bin/bash

# Exit on error
set -e

# Configuration
SERVER_IP="52.60.133.148"
DOMAIN="ubiquitoussoftware.com"
SERVER_USER="bitnami"  # Change this to your server's username if different
APP_DIR="/var/www/$DOMAIN"
PORT="3001"  # Choose a port that's not being used by other applications
USE_PM2=false  # Set to true to use PM2 instead of systemd

# Build the Next.js application
echo "Building the Next.js application..."
npm run build

# Create a deployment directory
echo "Creating deployment package..."
mkdir -p deploy
cp -r .next deploy/
cp -r public deploy/
cp package.json deploy/
cp package-lock.json deploy/
cp next.config.mjs deploy/
cp ecosystem.config.js deploy/

# Create a start script
cat > deploy/start.sh << 'EOL'
#!/bin/bash
export PORT=3001
npm install --production
npm start
EOL
chmod +x deploy/start.sh

if [ "$USE_PM2" = false ]; then
  # Create a systemd service file
  cat > deploy/app.service << EOL
[Unit]
Description=Next.js application for $DOMAIN
After=network.target

[Service]
Type=simple
User=$SERVER_USER
WorkingDirectory=$APP_DIR
ExecStart=/bin/bash $APP_DIR/start.sh
Restart=on-failure
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
EOL
fi

# Create Nginx configuration
cat > deploy/nginx.conf << EOL
server {
    listen 80;
    server_name $DOMAIN www.$DOMAIN;

    location / {
        proxy_pass http://localhost:$PORT;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Transfer files to the server
echo "Transferring files to the server..."
ssh $SERVER_USER@$SERVER_IP "sudo mkdir -p $APP_DIR"
ssh $SERVER_USER@$SERVER_IP "sudo chown $SERVER_USER:$SERVER_USER $APP_DIR"
rsync -avz --delete deploy/ $SERVER_USER@$SERVER_IP:$APP_DIR

# Set up the application on the server
echo "Setting up the application on the server..."
ssh $SERVER_USER@$SERVER_IP << EOF
    # Install PM2 if using it
    if [ "$USE_PM2" = true ]; then
        # Install PM2 globally if not already installed
        if ! command -v pm2 &> /dev/null; then
            sudo npm install -g pm2
        fi
        
        # Start the application with PM2
        cd $APP_DIR
        npm install --production
        pm2 start ecosystem.config.js
        pm2 save
        
        # Set up PM2 to start on boot
        pm2 startup
        sudo env PATH=\$PATH:/usr/bin pm2 startup systemd -u $SERVER_USER --hp /home/$SERVER_USER
    else
        # Copy the systemd service file
        sudo cp $APP_DIR/app.service /etc/systemd/system/${DOMAIN}.service
        
        # Reload systemd and start the service
        sudo systemctl daemon-reload
        sudo systemctl enable ${DOMAIN}.service
        sudo systemctl restart ${DOMAIN}.service
    fi
    
    # Copy the Nginx configuration
    sudo cp $APP_DIR/nginx.conf /etc/nginx/sites-available/$DOMAIN
    sudo ln -sf /etc/nginx/sites-available/$DOMAIN /etc/nginx/sites-enabled/
    
    # Test Nginx configuration and reload
    sudo nginx -t
    sudo systemctl reload nginx
    
    # Set up SSL with Let's Encrypt
    sudo certbot --nginx -d $DOMAIN -d www.$DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
EOF

echo "Deployment completed successfully!"
echo "Your website should now be accessible at https://$DOMAIN" 