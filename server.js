// module imports
const express = require('express')
const database = require('./config/database.js')
const ect = require('ect')
const app = express()
var res

const ectRenderer = ect({
	ext: '.ect',
	watch: true,
	open: '{{',
	close: '}}'
});

app.set('view engine', 'ect')
app.engine('ect', ectRenderer.render)
app.use(express.static(__dirname + '/public'));

app.get('/', (request, response) => {
  database.client.query('SELECT * FROM languages ORDER BY language;', [], (err, result) => {
      if (err) console.error('error happened during query')
      response.render('index', {
      	result: result.rows
      })
  })
})
var port = process.env.PORT || 3000

app.listen(port)
console.log('Server is listening for requests... '+ port)
