// requiring orm
const orm = require("../config/orm.js");

let burger = {
    // selecting all
    selectAll: (cb) => {
        orm.selectAll("burgers", (res){
            cb(res);
        });
    },
    // Adding a burger to the database
    insertOne: (col, burger, cb) => {
        orm.create("burgers", col, burger, (res) => {
            cb(res);
        })
    },
    // updating a burgers devour column
    updateOne: (col, col2, id, cb) => {
        orm.update("burgers", col, col2, id, (res) => {
            cb(res);
        });
    }
};

// exporting
module.exports = burger;