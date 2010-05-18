var http = require('http')
var port = process.env.PORT || 8001

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end('Hello Jelle\n')
}).listen(parseInt(port))