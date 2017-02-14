// module imports
const http = require('http');
const pg = require('pg');
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');

// conn strings
const connString = 'postgres://gvodabrblszwoy:b15ed1f7d7bc2630f57c3fc0d6eba497369873e673692119034e909f13fc3163@ec2-54-225-122-119.compute-1.amazonaws.com:5432/d8dpmerp72t1cu'
const localString = 'postgres://localhost:5432/haydenknowles'

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
  pg.connect(connString, (err, client, done) => {
    if (err) return console.error('error fetching client from pool', err);
    client.query('SELECT * from "public"."nodetest" where id = $1', ['2'], function (err, result){
        done()
        if (err) console.error('error happened during query', err);
        //console.log(typeof result.rows[0].id);
        res = result.rows[0]
        //process.exit(0);

        response.render('home', {
          name: res.name
        })
    })
  })

})
var port = process.env.PORT || 3000
app.listen(port)
console.log('Server is listening for requests...')
