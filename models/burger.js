// requiring orm
const orm = require("../config/orm.js");

let burger = {
    // selecting all
    selectAll: (cb) => {
        orm.all("burgers", (res)=>{
            cb(res);
        });
    },
    // Adding a burger to the database
    insertOne: (burger, cb) => {
        orm.create("burgers", "burger_name", burger, (res) => {
            cb(res);
        })
    },
    // updating a burgers devour column
    updateOne: (val1, val2, cb) => {
        orm.update("burgers", "devoured", val1, val2, (res) => {
            cb(res);
        });
    }
};

// exporting
module.exports = burger;