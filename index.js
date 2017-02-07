var http = require('http')

var server = http.createServer(function(request, response) {
  response.write('Hello World')
  console.log('got a request!')
  response.end()
})

server.listen(3000)
console.log('Server is listening on port 3000...')