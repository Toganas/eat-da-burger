// requiring dependencies
const express = require("express");
const burger = require("../models/burger.js");
let router = express.Router();

// creating routing

// getting the information to put it on a webpage
router.get("/", (req, res) => {
    burger.all((data, err) => {
        // handlebars object
        if (err) throw err;
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // render on page using the index handlebars page
        res.render("index", hbsObject);
    });
});
// // creating an api from the info posted on the page
// router.post("api/burgers", (req, res) => {
//     // creating the burger
//     burger.create([
//         "burger_name"
//     ], [
//             req.body.name,
//         ], (result, err) => {
//             // sending back the result as a json
//             if (err) throw err;
//             res.json({
//                 id: result.insertId,
//                 burger_name: req.body.name
//             });
//         });
// });

// updating the devour
router.put("/api/burger/:id/", (req, res) => {

    let id = req.params.id;
    
    burger.update(id, (result, err) => {
        console.log(result);
        if (err) throw err;
        // if (result.changedRows == 0) {
        //     // no rows were changed, which means the ID isn't there, make it a 404
        //     return res.status(404).end()
        // } else {
            res.redirect('/');
        // }
    })

})

module.exports = router