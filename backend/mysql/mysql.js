var mysql      = require('mysql');
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const db = process.env.DB

var connection = mysql.createConnection({
  host     : host,
  user     : user,
  password : password,
  database: db
});
 
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
 
  console.log('connected as id ' + connection.threadId);
});

module.exports = connection;