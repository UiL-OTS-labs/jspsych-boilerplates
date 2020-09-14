#!/usr/bin/env python3

import http.server

server_address =('', 8000)
with http.server.HTTPServer(
        server_address,
        http.server.SimpleHTTPRequestHandler
        ) as server_daemon:
    server_daemon.serve_forever()
