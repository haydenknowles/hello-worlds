// module imports
const http = require('http');
const pg = require('pg');
const express = require('express');
const path = require('path');
const client = require('./config/database').database;


var res;
const app = express()

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  // pg.connect(connString, (err, client, done) => {
  //   if (err) return console.error('error fetching client from pool', err);
  //   client.query('SELECT * from "public"."nodetest" where id = $1', ['2'], function (err, result){
  //       done()
  //       if (err) console.error('error happened during query', err);
  //       //console.log(typeof result.rows[0].id);
  //       res = result.rows[0]
  //       //process.exit(0);
  //
  //       response.render('home', {
  //         name: res.name
  //       })
  //   })

  //})
client.query('SELECT * from "public"."nodetest" where id = $1', ['2'], function (err, result){
      done()
      if (err) console.error('error happened during query', err);
      //console.log(typeof result.rows[0].id);
      res = result.rows[0]
      //process.exit(0);
      console.log(res.name);
      response.write("Hello " + res.name)
  })
})
var port = process.env.PORT || 3000
app.listen(port)
console.log('Server is listening for requests...')
