module.exports = {
  apps: [
    {
      name: 'ubiquitoussoftware',
      script: 'npm',
      args: 'start',
      cwd: '/var/www/ubiquitoussoftware.com',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}; 