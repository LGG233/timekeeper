var db = require("../../models");

module.exports = function (app) {
    // get all time entries
    app.get("/time", function (req, res) {
        db.timeEntry.findAll().then(function (dbTime) {
            res.json(dbTime);
        });
    });

    // get one entry
    app.get("/time/:id", function (req, res) {
        db.timeEntry.findAll({
            where: {
                id: req.params.id
            },
        }).then(function (dbTime) {
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
            res.json(dbTime);
        });
    });

    // get all time for one project 
    app.get("/projectTime/:id", function (req, res) {
        db.timeEntry.findAll({
            where: {
                ProjectId: req.params.id
            },
        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    // create new client
    app.post("/newtimeentry", function (req, res) {
        db.timeEntry.create({
            client_name: req.body.entryClientName,
            project_name: req.body.entryProjectName, // need to put this into the time entry form
            date_of_service: req.body.entryDate,
            hours: req.body.entryTime,
            desc_of_work: req.body.entryDesc,
            ProjectId: req.body.ProjectId
        })
            .then(function (dbTime) {
                res.json(dbTime);
            });
    });

    // delete one time entry
    app.delete("/time/:id", function (req, res) {
        db.timeEntry.destroy({
            where: {
                id: req.params.id
            },
        }).then(function (dbTime) {
            res.json(dbTime);
        });
    });

    // edit one time entry
    app.put("/time/:id", function (req, res) {
        db.timeEntry.update(
            {
                client_name: req.body.entryClientName,
                project_name: req.body.entryProjectName, // need to put this into the time entry form
                date_of_service: req.body.entryTimeDOS,
                hours: req.body.entryHours,
                desc_of_work: req.body.entryTimeDesc,
                ProjectId: req.body.projectId
            },
            {
                where: {
                    id: req.params.id
                }
            }).then(function (dbTime) {
                console.log(req.body.entryClientName);
                res.json(dbTime);
            });
    });
}
