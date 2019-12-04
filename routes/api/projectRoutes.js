var db = require("../../models");

module.exports = function (app) {
    // get all projects
    app.get("/projects", function (req, res) {
        db.Project.findAll().then(function (dbProject) {
            console.log("request sent");
            console.log(dbProject);
            res.json(dbProject);
        });
    });

    // get one project 
    app.get("/project/:id", function (req, res) {
        db.Project.findAll({
            where: {
                project_id: req.params.id
            },
        }).then(function (dbProject) {
            console.log("request sent");
            console.log(dbProject);
            res.json(dbProject);
        });
    });

    // get all projects for one client 
    app.get("/clientprojects/:id", function (req, res) {
        db.Project.findAll({
            where: {
                client_name: req.params.id
            },
        }).then(function (dbProject) {
            console.log("request sent");
            console.log(dbProject);
            res.json(dbProject);
        });
    });

    // create new client
    app.post("/newProject", function (req, res) {
        db.Project.create({
            project_name: req.body.entryProjectName,
            client_name: req.body.entryClientName,
            project_description: req.body.entryProjectDesc,
            billing_type: req.body.entryBillingType,
            billing_rate: req.body.entryBillingRate,
            billing_unit: req.body.entryBillingUnit
        })
            .then(function (dbProject) {
                res.json(dbProject);
            });
    });


    // delete one project
    app.delete("/project/:id", function (req, res) {
        db.Project.destroy({
            where: {
                project_id: req.params.id
            },
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // edit one project
    app.put("/project/:id", function (req, res) {
        db.Project.update(
            req.body, {
            where: {
                project_id: req.params.id
            },
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });
}
