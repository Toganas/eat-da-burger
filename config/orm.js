// require connection
const conn = require("./connection.js")

// create orm
let orm = {
    // select all
    selectAll: (table, cb) => {
        // creating the query
        let queryString = "SELECT * FROM" + table + ";"
        // querying the database
        conn.query(queryString), [table], (err, res) => {
            if (err) throw err;
            cb(res);
        }

    },
    // adding one burger to the database
    insertOne: (table, col, burger, cb) => {
        // building the query String
        let queryString = "INSERT INTO" + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") VALUES ?;"

        console.log(queryString)
        // querying mysql
        conn.query(queryString, burger), (err, res) => {
            if (err) throw err;
            cb(res);
        }

    },
    // updating a burger from devoured =  false to true
    updateOne: (table, col, col2, id, cb) => {
        // creating the query string
        let queryString = "UPDATE " + table;
        queryString += " SET "
        queryString += col
        queryString += " = false WHERE "
        queryString += col2
        queryString += " = "
        queryString = + id
        queryString = + ";"

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