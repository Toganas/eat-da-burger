var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.password,
    database: 'burgers_db'
});

conn.connect();



conn.end();