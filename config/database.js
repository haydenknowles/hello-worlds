const pg = require('pg')

// conn strings
const connString = 'postgres://gvodabrblszwoy:b15ed1f7d7bc2630f57c3fc0d6eba497369873e673692119034e909f13fc3163@ec2-54-225-122-119.compute-1.amazonaws.com:5432/d8dpmerp72t1cu'
const localString = 'postgres://localhost:5432/haydenknowles'

function pgConnection(callback){

}

pg.connect(connString, (err, client, done) => {
  module.exports = {
    client: client,
    done: done
  }
})
