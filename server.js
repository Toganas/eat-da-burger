// require dependencies
const express = require("express");
const app = express();
const exphbs = require("express-handlebars")
// acquire the port
let PORT = process.env.PORT || 3000;

// setting static content as the public directory.
app.use(express.static("public"));

// parse into json
app.use(express.urlencoded ({ extended: true }))
app.use(express.json());

// set up handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// give server access to routes
const routes = require("./controllers/burgers_controller.js")
app.use(routes);

// listen to the server response so we know we're up and running

console.log("Server listening on http://localhost:" + PORT);