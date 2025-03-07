#!/bin/bash

# Configuration
SERVER_IP="52.60.133.148"
DOMAIN="ubiquitoussoftware.com"
SERVER_USER="bitnami"

# Check if the domain resolves to the server IP
echo "Checking DNS resolution..."
RESOLVED_IP=$(dig +short $DOMAIN)
if [ "$RESOLVED_IP" = "$SERVER_IP" ]; then
  echo "✅ DNS resolution: $DOMAIN resolves to $SERVER_IP"
else
  echo "❌ DNS resolution: $DOMAIN resolves to $RESOLVED_IP, expected $SERVER_IP"
fi

# Check if the website is accessible via HTTP
echo "Checking HTTP accessibility..."
HTTP_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://$DOMAIN)
if [ "$HTTP_STATUS" = "200" ] || [ "$HTTP_STATUS" = "301" ] || [ "$HTTP_STATUS" = "302" ]; then
  echo "✅ HTTP accessibility: $DOMAIN is accessible via HTTP (status code: $HTTP_STATUS)"
else
  echo "❌ HTTP accessibility: $DOMAIN is not accessible via HTTP (status code: $HTTP_STATUS)"
fi

# Check if the website is accessible via HTTPS
echo "Checking HTTPS accessibility..."
HTTPS_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://$DOMAIN)
if [ "$HTTPS_STATUS" = "200" ]; then
  echo "✅ HTTPS accessibility: $DOMAIN is accessible via HTTPS (status code: $HTTPS_STATUS)"
else
  echo "❌ HTTPS accessibility: $DOMAIN is not accessible via HTTPS (status code: $HTTPS_STATUS)"
fi

# Check if the application is running on the server
echo "Checking application status on the server..."
ssh $SERVER_USER@$SERVER_IP << EOF
  # Check if the application is running with systemd
  if systemctl is-active --quiet ubiquitousoftware.com.service; then
    echo "✅ Application status: Running with systemd"
  else
    # Check if the application is running with PM2
    if command -v pm2 &> /dev/null && pm2 list | grep -q "ubiquitousoftware"; then
      echo "✅ Application status: Running with PM2"
    else
      echo "❌ Application status: Not running"
    fi
  fi
  
  # Check Nginx configuration
  if nginx -t &> /dev/null; then
    echo "✅ Nginx configuration: Valid"
  else
    echo "❌ Nginx configuration: Invalid"
  fi
  
  # Check if the Nginx site is enabled
  if [ -f /etc/nginx/sites-enabled/$DOMAIN ]; then
    echo "✅ Nginx site: Enabled"
  else
    echo "❌ Nginx site: Not enabled"
  fi
  
  # Check if SSL certificate exists
  if [ -d /etc/letsencrypt/live/$DOMAIN ]; then
    echo "✅ SSL certificate: Exists"
    
    # Check SSL certificate expiration
    EXPIRY=\$(openssl x509 -enddate -noout -in /etc/letsencrypt/live/$DOMAIN/cert.pem | cut -d= -f2)
    echo "   SSL certificate expires on: \$EXPIRY"
  else
    echo "❌ SSL certificate: Does not exist"
  fi
EOF

echo "Deployment check completed." 