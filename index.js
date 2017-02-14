var http = require('http')

const pg = require('pg');
const connString = 'postgres://gvodabrblszwoy:b15ed1f7d7bc2630f57c3fc0d6eba497369873e673692119034e909f13fc3163@ec2-54-225-122-119.compute-1.amazonaws.com:5432/d8dpmerp72t1cu'

pg.connect(connString, (err, client, done) => {
  if (err) return console.error('error fetching client from pool', err);
  client.query('SELECT * from "public"."nodetest" where id = $1', ['2'], function (err, result){
      done()
      if (err) console.error('error happened during query', err);
      console.log(result.rows[0]);
      process.exit(0);
  })
})
// var server = http.createServer(function(request, response) {
//   response.write('Hello World')
//   console.log('got a request!')
//   response.end()
// })
//
// var port = process.env.PORT || 3000
// server.listen(port)
// console.log('Server is listening on port 3000...')
