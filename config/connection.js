// require mysql
var mysql = require('mysql');
// set up connection info
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // grab password from .env
    password: process.env.password,
    database: 'burgers_db'
});

// connect to database
conn.connect((err)=>{
    if(err) {
        console.log("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

// export connection
module.exports = conn;