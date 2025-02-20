# Portfolio Website (leighcie.com)

Personal portfolio website showcasing work experience, projects, and contact information. Built with HTML, CSS, and JavaScript.

## Infrastructure

- **Hosting**: GCP Compute Engine (instance-1)
- **Domain**: www.leighcie.com
- **Server**: Python HTTPS Server
- **SSL**: SSL: Let's Encrypt with auto-renewal and server restart

## Quick Start

```bash
# Clone repository
git clone <repository-url>
cd my-website

# Start HTTPS server
sudo systemctl start https-server

# Check status
sudo systemctl status https-server
```

## Server Management

Basic commands for server maintenance:

```bash
# Start/Stop/Restart server
sudo systemctl start https-server
sudo systemctl stop https-server
sudo systemctl restart https-server

# View logs
sudo journalctl -u https-server
```

## SSL Certificates

Certificates auto-renew via crontab with automatic server restart. The renewal hook is configured in /etc/letsencrypt/renewal-hooks/deploy/restart-https-server.sh. 

Manual renewal if needed:

```bash
sudo certbot renew
```
To verify renewal hook setup:
bash

# Check if hook exists and is executable
ls -l /etc/letsencrypt/renewal-hooks/deploy/

# Test renewal process (dry run)
sudo certbot renew --dry-run

## Deployment

Deploy updates:

```bash
cd /home/leighciegregg/my-website
sudo ./deploy.sh
```

## Common Issues

1. **HTTPS not working:**
   ```bash
   # Check server status
   sudo systemctl status https-server
   
   # Verify port 443 is listening
   sudo netstat -tlpn | grep 443
   ```

2. **Website not updating:**
   ```bash
   # Redeploy
   sudo ./deploy.sh
   ```

## Structure

```
my-website/
├── index.html          # Main portfolio page
├── styles.css          # Styles
├── script.js           # Interactive elements
├── httpsserver.py      # HTTPS server
└── deploy.sh           # Deployment script
```

## Contact

For issues or questions:
- Email: leighciegregg@gmail.com
- Instance access: SSH via GCP Console