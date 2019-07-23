require("dotenv").config();
// require mysql
var mysql = require('mysql');
// set up connection info
var conn = mysql.createConnection({
    host: 'localhost',
    port: 3006,
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
    console.log("connected");
});

// export connection
module.exports = conn;