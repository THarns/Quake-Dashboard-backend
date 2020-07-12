var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'quake_db'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(err);
});

module.exports = connection;