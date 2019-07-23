// requiring dependencies
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// creating routing
router.get("/", (req, res) => {
    res.redirect("/burgers");
});
// getting the information to put it on a webpage
router.get("/burgers", (req, res) => {
    burger.selectAll((data, err) => {
        // handlebars object
        if (err) throw err;
        // render on page using the index handlebars page
        res.render("index", { burger_data: data });
    });
});
// // creating an api from the info posted on the page
router.post("/burgers/create", (req, res) => {
    // creating the burger
    burger.insertOne(req.body.burger_name, (err, result) => {
        // render back to index
        console.log(result);
    });
    res.redirect("/")
});

// updating the devour
router.put("/burgers/:id", (req, res) => {
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