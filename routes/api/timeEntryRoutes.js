var db = require("../../models");

module.exports = function (app) {
    // create new time entry
    app.post("timeentry", function (req, res) {
        db.timeentries.create({

        })
    })
}