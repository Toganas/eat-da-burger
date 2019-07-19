// require connection
const conn = require("./connection.js")

// create orm
let orm = {
    // select all
    selectAll: (table, cb) => {
        let queryString = "SELECT * FROM" + table + ";"
        conn.query(queryString), [table], (err, res) => {
            if (err) throw err;
            cb(res);
        }

    },
    insertOne: (table, col, burger, cb) => {
        let queryString = "INSERT INTO" + table;
        queryString += " (";
        queryString += col.toString();
        queryString += ") VALUES ?;"
            
        console.log(queryString)

        conn.query(queryString, burger), (err, res) => {
            if (err) throw err;
            cb(res);
        }

    },
    updateOne: (table, col, col2, id, cb) => {
        let queryString = "UPDATE " + table;
        queryString += " SET "
        queryString += col
        queryString += " = false WHERE "
        queryString += col2
        queryString += " = "
        queryString =+ id
        queryString =+ ";"

        console.log(queryString)

        conn.query(queryString, (err,res)=>{
            if (err) throw err;
            cb(res);
        })
}
}