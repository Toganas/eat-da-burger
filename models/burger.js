// requiring orm
const orm = require("../config/orm.js");

let burger = {
    // selecting all
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        });
    },
    // Adding a burger to the database
    insertOne: (burger, cb) => {
        orm.insertOne("burgers",
            ["burger_name", "devoured"
            ], [
                burger, false
            ], cb);
    },
    // updating a burgers devour column
    updateOne: (id, cb) => {
        let condition = "id=" + id;
        orm.updateOne("burgers", {
            devoured: true
        }, condition, db);
    }
};

// exporting
module.exports = burger;