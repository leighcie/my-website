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

teams ={
    "team1": [
        {"activity": "Stand Up", "duration": 20, "start": "11:00"},
        {"activity": "Instant Challenge", "duration": 15, "start": "11:20"},
        {"activity": "Snack", "duration": 15, "start": "11:35"},
        {"activity": "Build", "duration": 55, "start": "11:50"},
        {"activity": "Clean Up", "duration": 15, "start": "12:45"}
    ],
    "team2": [
        {"activity": "Stand Up", "duration": 20, "start": "14:00"},
        {"activity": "Build", "duration": 55, "start": "14:20"},
        {"activity": "Snack", "duration": 15, "start": "15:15"},
        {"activity": "Instant Challenge", "duration": 15, "start": "15:30"},
        {"activity": "Clean Up", "duration": 15, "start": "15:45"}
    ]
}

# Adding endpoint for Activity
@app.route('/activity', methods=['GET'])
def activity():
    return jsonify({'activity': activity}) 
