// require connection
const conn = require("./connection.js");

// Making Question Marks for our selections
// makeQuestionMarks = (num) => {
//     let arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

// // Making Object key/value pairs fit SQL syntax
// sqlReady = (ob) =>{
//     let arr = [];

//     // looping through keys and pushing as a string into array
//     for (let key in ob) {
//         let value = ob[key];
//         // check hidden properties
//         if(Object.hasOwnProperty.call(ob, key)) {
//             if (typeof value === "string" && value.indexOf (" ") >=0){
//                 value= "'" + value + "'"
//             }

//             arr.push(key+"="+value);
//         }
//     }
//     return arr.toString();
// }

// create orm
let orm = {
    // select all
    all: (table, cb) => {
        // creating the query
        let queryString = "SELECT * FROM " + table + ";"
        // querying the database
        conn.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        });

    },
    // adding one burger to the database
    create: (table, col, burger, cb) => {
        // building the query String
        let queryString = "INSERT INTO " + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") VALUES "
        queryString += burger;

        console.log(queryString)
        // querying mysql
        conn.query(queryString, burger), (err, res) => {
            if (err) throw err;
            cb(res);
        }

    },
    // updating a burger from devoured =  false to true
    update: (table, col, val1, col2, val2, cb) => {
        // creating the query string
        // UPDATE burgers SET DEVOURED = true WHERE id = ?
        let queryString = "UPDATE " + table;
        queryString += " SET ";
        queryString += col;
        queryString += " = ";
        queryString = + val1;
        queryString += " WHERE ";
        queryString += col2;
        queryString += " = "
        queryString += val2
        queryString += ";"

        

        console.log(queryString)
        // query mysql
        conn.query(queryString, (err, res) => {
            if (err) throw err;
            cb(res);
        })
    }
}

// export orm
module.exports = orm;