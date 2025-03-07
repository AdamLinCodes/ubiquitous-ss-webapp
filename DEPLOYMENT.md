# Deployment Guide for ubiquitoussoftware.com

This guide explains how to deploy the Next.js application to an AWS Lightsail server and make it accessible at ubiquitoussoftware.com.

## Prerequisites

1. AWS Lightsail server (hostname: 52.60.133.148)
2. SSH access to the server
3. Domain name (ubiquitoussoftware.com) with DNS access
4. Node.js and npm installed on your local machine

## Deployment Steps

### 1. Point Domain to the Server

Update your domain's DNS settings to point to your AWS Lightsail server:

- Create an A record for `ubiquitoussoftware.com` pointing to `52.60.133.148`
- Create an A record for `www.ubiquitoussoftware.com` pointing to `52.60.133.148`

DNS changes may take up to 48 hours to propagate globally.

### 2. Prepare the Server

Ensure the following software is installed on your server:

```bash
# Connect to your server
ssh bitnami@52.60.133.148

# Update package lists
sudo apt update

# Install Node.js and npm if not already installed
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx if not already installed
sudo apt install -y nginx

# Install Certbot for SSL
sudo apt install -y certbot python3-certbot-nginx

# Create the directory for the application
sudo mkdir -p /var/www/ubiquitoussoftware.com
sudo chown bitnami:bitnami /var/www/ubiquitoussoftware.com
```

### 3. Deploy the Application

You can deploy the application using either systemd (default) or PM2 for process management.

#### Using systemd (Default)

Run the deployment script from your local development environment:

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

#### Using PM2

If you prefer to use PM2 for process management, edit the `deploy.sh` script and set `USE_PM2=true`, then run the script:

```bash
# Edit the script to use PM2
sed -i 's/USE_PM2=false/USE_PM2=true/g' deploy.sh

# Make the script executable
chmod +x deploy.sh

# Run the deployment script
./deploy.sh
```

The script will:
1. Build the Next.js application
2. Package the necessary files
3. Transfer them to the server
4. Set up either systemd or PM2 to run the application
5. Configure Nginx as a reverse proxy
6. Set up SSL with Let's Encrypt

### 4. Verify the Deployment

After the deployment script completes, verify that your website is accessible:

1. Open a web browser and navigate to https://ubiquitoussoftware.com
2. Check that the website loads correctly and SSL is working

### 5. Troubleshooting

If you encounter issues:

#### Check the application logs:

For systemd:
```bash
sudo journalctl -u ubiquitoussoftware.com.service
```

For PM2:
```bash
pm2 logs ubiquitoussoftware
```

#### Check Nginx logs:
```bash
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log
```

#### Restart the application:

For systemd:
```bash
sudo systemctl restart ubiquitoussoftware.com.service
```

For PM2:
```bash
pm2 restart ubiquitoussoftware
```

#### Restart Nginx:
```bash
sudo systemctl restart nginx
```

## Updating the Application

To update the application, simply run the deployment script again. It will build the latest version and deploy it to the server.

## Manual Deployment

If you prefer to deploy manually or if the script fails, follow these steps:

1. Build the application locally:
```bash
npm run build
```

2. Package the necessary files:
```bash
mkdir -p deploy
cp -r .next deploy/
cp -r public deploy/
cp package.json deploy/
cp package-lock.json deploy/
cp next.config.mjs deploy/
```

3. Transfer the files to the server:
```bash
rsync -avz --delete deploy/ bitnami@52.60.133.148:/var/www/ubiquitoussoftware.com/
```

4. SSH into the server and start the application:

Using systemd:
```bash
ssh bitnami@52.60.133.148
cd /var/www/ubiquitoussoftware.com
npm install --production
sudo systemctl restart ubiquitoussoftware.com.service
```

Using PM2:
```bash
ssh bitnami@52.60.133.148
cd /var/www/ubiquitoussoftware.com
npm install --production
pm2 restart ubiquitoussoftware || pm2 start ecosystem.config.js
```

5. Set up Nginx and SSL as described in the deployment script. 