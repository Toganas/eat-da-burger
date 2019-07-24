require("dotenv").config();
// require mysql
var mysql = require('mysql');
var conn;
// set up connection info
if (process.env.JAWSDB_URL){
    conn = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    // grab password from .env
    password: process.env.password,
    database: 'burgers_db'
});
};

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