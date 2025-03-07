# Deployment Guide for AWS Lightsail

This guide explains how to deploy this Next.js application to an AWS Lightsail server that already has a website running.

## Prerequisites

1. AWS Lightsail server with SSH access
2. Node.js and npm installed on the server
3. Nginx installed on the server
4. PM2 installed globally on the server (`npm install -g pm2`)
5. Domain name (ubiquitoussoftware.com) with DNS pointing to your server

## Deployment Steps

### 1. Clone the Repository

SSH into your Lightsail server and clone the repository:

```bash
ssh bitnami@your-server-ip
cd /opt  # or any directory where you want to deploy
git clone https://github.com/your-username/ubiquitous-ss-webapp.git
cd ubiquitous-ss-webapp
```

### 2. Install Dependencies and Build

```bash
npm install
npm run build
```

### 3. Set Up PM2 to Manage the Application

```bash
# Start the application with PM2
pm2 start ecosystem.config.js

# Save the PM2 configuration to restart on server reboot
pm2 save

# Set up PM2 to start on boot
pm2 startup
# Follow the instructions provided by the above command
```

### 4. Configure Nginx

Copy the Nginx configuration file to the Nginx sites-available directory:

```bash
sudo cp nginx.conf /etc/nginx/sites-available/ubiquitoussoftware.com
```

Create a symbolic link to enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/ubiquitoussoftware.com /etc/nginx/sites-enabled/
```

Test the Nginx configuration:

```bash
sudo nginx -t
```

If the test is successful, reload Nginx:

```bash
sudo systemctl reload nginx
```

### 5. Set Up SSL with Let's Encrypt (Optional)

```bash
sudo certbot --nginx -d ubiquitoussoftware.com -d www.ubiquitoussoftware.com
```

Follow the prompts to complete the SSL setup.

## Updating the Application

To update the application:

```bash
cd /opt/ubiquitous-ss-webapp
git pull
npm install
npm run build
pm2 restart ubiquitoussoftware
```

## Troubleshooting

### Check Application Status

```bash
pm2 status
pm2 logs ubiquitoussoftware
```

### Check Nginx Logs

```bash
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Restart Services

```bash
pm2 restart ubiquitoussoftware
sudo systemctl restart nginx
``` 