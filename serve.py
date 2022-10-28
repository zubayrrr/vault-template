import os
import http.server
import socketserver
PORT = 8085

os.chdir('output')

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
      ".js": "application/javascript",
})

httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
