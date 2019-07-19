// requiring dependencies
const express = require("express");
const burger = require("../models/burger.js");
const router = express.Router();

// creating routing

// getting the information to put it on a webpage
router.get("/", (req, res)=>{
    burger.selectAll((data)=>{
        // handlebars object
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        // render on page using the index handlebars page
        res.render("index", hbsObject);
    });
});
// creating an api from the info posted on the page
router.post("api/burgers", (req,res)=>{
    burger.create([
        "burger_name"
    ], [
        req.body.name,
    ], (result)=>{
        // sending back the result as a json
        res.json({ id: result.insertId,
        burger_name:req.body.name });
    });
});

// updating the devour