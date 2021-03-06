var tables = require("./tables.js");
var waitlist = require("./waitlist.js");
var fs = require("fs");


var path = require("path");

module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "index.html"));
    });

    app.get("/tables", function (req, res) {
        res.sendFile(path.join(__dirname, "tables.html"));
    });

    app.get("/reservations", function (req, res) {
        res.sendFile(path.join(__dirname, "reservations.html"));
    });
}