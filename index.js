http = require('http')

server = http.createServer(function(request, response) {
		response.write('Hello World!')
		response.end()
})

server.listen()
