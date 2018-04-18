var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");


var ApiRoutes = require("apiRoutes.js");
var HtmlRoutes = require("htmlRoutes.js");
var Waitlist = require("app/data/waitlist.js");
var Tables = require("app/data/tables.js")
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());