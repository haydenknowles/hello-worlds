var http = require('http')

server = http.createServer(function(request, response) {
  request.write('Hello World')
  request.close()
})

server.listen(3000)
