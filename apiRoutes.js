var tables = require("./tables.js");

module.exports = function (app) {

    app.get("/api/tables", function (req, res) {
        return res.json(tables);
    });

    app.get("/api/waitlist", function (req, res) {
        return res.json(waitlist);
    });


    //pushes first five tables to tables array, then following tables to waitlist array

    if (tables.length <= 4) {

        app.post("api/tables", function (req, res) {
            var newTable = req.body;

            console.log(newTable);
            tables.push(newTable);
            res.json(newTable);
        });
    } else {
        app.post("api/waitlist", function (req, res) {
            var newWaitlist = req.body;

            console.log(waitlist);
            waitlist.push(newWaitlist);
            res.json(newWaitlist);
        });
    }
}