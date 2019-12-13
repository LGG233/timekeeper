var db = require("../../models");

module.exports = function (app) {
    // get all projects
    app.get("/projects", function (req, res) {
        db.Project.findAll().then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // get one project 
    app.get("/project/:id", function (req, res) {
        db.Project.findAll({
            where: {
                id: req.params.id
            },
        }).then(function (dbProject) {
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
            res.json(dbProject);
        });
    });

    // create new client
    app.post("/newProject", function (req, res) {
        console.log(req.body.entryProjectDesc)
        console.log(req.body.entryBillingRate)
        db.Project.create({
            client_name: req.body.entryProjectClient,
            project_name: req.body.entryProjectName,
            project_description: req.body.entryProjectDesc,
            billing_type: req.body.entryBillingType,
            billing_rate: req.body.entryBillingRate,
            billing_unit: req.body.entryBillingUnit,
            ClientId: req.body.ClientId
        })
            .then(function (dbProject) {
                res.json(dbProject);
            });
    });


    // delete one project
    app.delete("/project/:id", function (req, res) {
        db.Project.destroy({
            where: {
                id: req.params.id
            },
        }).then(function (dbProject) {
            res.json(dbProject);
        });
    });

    // edit one project
    app.put("/project/:id", function (req, res) {
        db.Project.update(
            {
                client_name: req.body.entryClientName,
                project_name: req.body.entryProjectName,
                project_description: req.body.entryProjectDesc,
                billing_type: req.body.entryBillingType,
                billing_rate: req.body.entryBillingRate,
                billing_unit: req.body.entryBillingUnit
            },
            {
                where: {
                    id: req.params.id
                },
            }).then(function (dbProject) {
                res.json(dbProject);
            });
    });
}
