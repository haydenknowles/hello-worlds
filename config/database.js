const pg = require('pg')

// conn strings
//const localString = 'postgres://localhost:5432/haydenknowles'
const connString = 'postgres://@ec2-54-225-122-119.compute-1.amazonaws.com:5432/d8dpmerp72t1cu '
const connection = new pg.Client({
  user: "gvodabrblszwoy",
  password: process.env.pass,
  database: "d8dpmerp72t1cu",
  port: "5432",
  host: "ec2-54-225-122-119.compute-1.amazonaws.com",
  ssl: true
})

connection.connect((err, client, done) => {
  module.exports.client = client
  module.exports.done = done
})
