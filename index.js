var http = require('http')

var server = http.createServer(function(request, response) {
  response.write('Hello World')
  console.log('got a request!')
  response.end()
})

var port = process.env.PORT || 3000
server.listen(port)
console.log('Server is listening on port 3000...')