// requiring orm
const orm = require("../config/orm.js");

let burger = {
    // selecting all
    all: (cb) => {
        orm.all("burgers", (res)=>{
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
    updateOne: (val2, cb) => {
        orm.update("burgers", "devoured", true, "id", val2, (res) => {
            cb(res);
        });
    }
};

// exporting
module.exports = burger;