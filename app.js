var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");


var app = express();
require("./apiRoutes")(app);
require("./htmlRoutes")(app);
var waitlist = require("./waitlist.js");
var tables = require("./tables.js");
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());


app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});