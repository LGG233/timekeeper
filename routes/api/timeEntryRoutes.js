var db = require("../../models");

module.exports = function (app) {
    // get all time entries
    app.get("/time", function (req, res) {
        db.timeEntry.findAll().then(function (dbTime) {
            console.log("request sent");
            console.log(dbTime);
            res.json(dbTime);
        });
    });

    // get one entry
    app.get("/time/:id", function (req, res) {
        db.timeEntry.findAll({
            where: {
                entry_id: req.params.id
            },
        }).then(function (dbTime) {
            console.log("request sent");
            console.log(dbTime);
            res.json(dbTime);
        });
    });

    // get all time for one client 
    app.get("/clienttime/:id", function (req, res) {
        db.timeEntry.findAll({
            where: {
                client_name: req.params.id
            },
        }).then(function (dbTime) {
            console.log("request sent");
            console.log(dbTime);
            res.json(dbTime);
        });
    });

    // create new client
    app.post("/newtimeentry", function (req, res) {
        db.timeEntry.create({
            client_name: req.body.entryClientName,
            project_name: req.body.entryProjectName, // need to put this into the time entry form
            date_of_service: req.body.entryTimeDOS,
            hours: req.body.entryHours,
            desc_of_work: req.body.entryTimeDesc,
            entry_id: req.body.entryID,
            ProjectProjectId: req.body.projectId
        })
            .then(function (dbTime) {
                res.json(dbTime);
            });
    });

    // delete one project
    app.delete("/time/:id", function (req, res) {
        db.timeEntry.destroy({
            where: {
                entry_id: req.params.id
            },
        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    // edit one project
    app.put("/time/:id", function (req, res) {
        db.timeEntry.update(
            req.body, {
            where: {
                project_id: req.params.id
            },
        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });
}
