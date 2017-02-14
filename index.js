var http = require('http')

const pg = require('pg');
const connString = 'postgres://localhost:5432/haydenknowles'

pg.connect(connString, (err, client, done) => {
  if (err) return console.error('error fetching client from pool', err);
  client.query('SELECT $1::varchar AS my_first_query', ['haydenknowles'], function (err, result) {
      done()
      if (err) console.error('error happened during query', err);
  })
}))
var server = http.createServer(function(request, response) {
  response.write('Hello World')
  console.log('got a request!')
  response.end()
})

var port = process.env.PORT || 3000
server.listen(port)
console.log('Server is listening on port 3000...')
