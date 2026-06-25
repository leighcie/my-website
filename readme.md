# Portfolio Website (leighcie.com)

Personal portfolio website showcasing work experience, projects, and contact information. Built with HTML, CSS, and JavaScript.

## Infrastructure

- **Hosting**: GCP Compute Engine (instance-1)
- **Domain**: www.leighcie.com
- **Server**: Node.js + Express (managed by pm2)
- **SSL**: Let's Encrypt with auto-renewal

## Architecture

Two pm2 processes run on the server:

- **main-server** (`~/main-server.js`) — serves the portfolio site over HTTPS on port 443, redirects HTTP (port 80) to HTTPS, and proxies `/clauseassist/api/*` to the API server
- **clauseassist-api** (`/var/www/leighcie.com/clauseassist-api/server.js`) — Express API on port 3001 that handles Claude AI calls for the clause analyzer

Static files:
- Portfolio site: `/home/leighciegregg/my-website/`
- Clause analyzer React build: `/var/www/leighcie.com/clauseassist/`

## Quick Start

```bash
# Check status of both processes
pm2 list

# View logs
pm2 logs main-server
pm2 logs clauseassist-api
```

## Server Management

```bash
# Restart servers
pm2 restart main-server
pm2 restart clauseassist-api
pm2 restart all

# Stop/start
pm2 stop main-server
pm2 start main-server

# Save process list (run after any changes to pm2 processes)
pm2 save
```

## Deployment

Deploy portfolio site updates:

```bash
cd ~/my-website
git pull
```

Deploy clause analyzer updates:
1. Build the React app locally: `npm run build` in the project folder
2. Zip the build folder and upload to `~/` via GCP SSH console
3. Extract: `sudo unzip -o ~/build.zip -d /var/www/leighcie.com/clauseassist`
4. If server.js changed, upload it and run: `pm2 restart clauseassist-api`

## SSL Certificates

Certificates are at `/etc/letsencrypt/live/www.leighcie.com/` and auto-renew via certbot.

Manual renewal if needed:

```bash
sudo certbot renew
```

Note: after renewal, restart main-server so it picks up the new cert:

```bash
pm2 restart main-server
```

## Common Issues

1. **Site not loading:**
   ```bash
   pm2 list                          # check both processes are online
   sudo lsof -i :443                 # check port 443 is listening
   pm2 logs main-server --lines 20   # check for errors
   ```

2. **Clause analyzer API not working:**
   ```bash
   pm2 logs clauseassist-api --lines 20
   cat /var/www/leighcie.com/clauseassist-api/.env   # verify API key exists
   ```

3. **Website not updating after git pull:**
   - Hard refresh in browser: Ctrl+Shift+R

4. **Server not starting after reboot:**
   ```bash
   pm2 resurrect    # restore saved process list
   ```

## Structure

```
/home/leighciegregg/
├── my-website/               # Portfolio site source (git repo)
│   ├── index.html
│   ├── case-studies.html
│   └── ...
├── main-server.js            # Main HTTPS server
└── node_modules/             # Server dependencies

/var/www/leighcie.com/
├── clauseassist/             # React build (static files)
└── clauseassist-api/         # Express API server
    ├── server.js
    ├── .env                  # CLAUDE_API_KEY
    └── node_modules/
```

## Contact

For issues or questions:
- Email: leighciegregg@gmail.com
- Instance access: SSH via GCP Console
