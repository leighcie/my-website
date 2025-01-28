# Portfolio Website (leighcie.com)

Personal portfolio website showcasing work experience, projects, and contact information. Built with HTML, CSS, and JavaScript.

## Infrastructure

- **Hosting**: GCP Compute Engine (instance-1)
- **Domain**: www.leighcie.com
- **Server**: Python HTTPS Server
- **SSL**: Let's Encrypt

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

Certificates auto-renew via crontab. Manual renewal if needed:

```bash
sudo certbot renew
```

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