import http.server
import ssl

# Set up HTTP server
server_address = ('', 443)  # Use port 443 for HTTPS
httpd = http.server.HTTPServer(server_address, http.server.SimpleHTTPRequestHandler)

# Path to your Let's Encrypt certificate and key files
cert_file = '/etc/letsencrypt/live/www.leighcie.com/fullchain.pem'
key_file = '/etc/letsencrypt/live/www.leighcie.com/privkey.pem'

# Wrap the server with SSL
httpd.socket = ssl.wrap_socket(httpd.socket,
                               keyfile=key_file,
                               certfile=cert_file,
                               server_side=True)

print("Serving on port 443 with HTTPS...")
httpd.serve_forever()