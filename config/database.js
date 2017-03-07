const pg = require('pg')

// conn strings
const connString = 'postgres://@ec2-54-225-122-119.compute-1.amazonaws.com:5432/d8dpmerp72t1cu '
const connection = new pg.Client({
  user: "gvodabrblszwoy",
  b15ed1f7d7bc2630f57c3fc0d6eba497369873e673692119034e909f13fc3163: "b15ed1f7d7bc2630f57c3fc0d6eba497369873e673692119034e909f13fc3163",
  database: "d8dpmerp72t1cu",
  port: "5432",
  host: "ec2-54-225-122-119.compute-1.amazonaws.com",
  ssl: true
})

//const localString = 'postgres://localhost:5432/haydenknowles'

function pgConnection(callback){

}
module.exports = {}

connection.connect((err, client, done) => {
  module.exports.client = client
  module.exports.done = done
})
