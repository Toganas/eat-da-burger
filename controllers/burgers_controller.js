// requiring dependencies
const express = require("express");
const burger = require("../models/burger.js");
let router = express.Router();

// creating routing

// getting the information to put it on a webpage
router.get("/", (req, res) => {
    burger.selectAll((data, err) => {
        // handlebars object
        if (err) throw err;
        // render on page using the index handlebars page
        res.render("index", { burger_data: data });
    });
});
// // creating an api from the info posted on the page
router.post("api/burgers", (req, res) => {
    // creating the burger
    burger.insertOne(req.body.burger_name, (result, err) => {
        // sending back the result as a json
        if (err) throw err;
        res.redirect("/")
    });
});

// updating the devour
router.put("/api/burger/:id", (req, res) => {
    burger.updateOne(req.params.id, (result, err) => {
        if (err) throw err;
        if (result.changedRows == 0) {
            // no rows were changed, which means the ID isn't there, make it a 404
            return res.status(404).end()
        } else {
            res.sendStatus(200);
        }
    })

})

module.exports = router