// module imports
const http = require('http');
const pg = require('pg');
const express = require('express');
const path = require('path');
const client = require('./config/database.js');


var res;
const app = express()
app.get('/', (request, response) => {
  client.client.query('SELECT * from "public"."Languages" where id = $1', ['100'], function (err, result){
      if (err) console.error('error happened during query', err);
      res = result.rows[0]
      response.send(res.language + "<br />" + res.code)
  })
})
var port = process.env.PORT || 3000

app.listen(port)
console.log('Server is listening for requests...')
