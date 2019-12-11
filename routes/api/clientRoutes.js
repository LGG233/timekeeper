var db = require("../../models");

module.exports = function (app) {
    // get all clients 
    app.get("/clients", function (req, res) {
        db.Client.findAll().then(function (dbClient) {
            console.log("request sent");
            console.log(dbClient);
            res.json(dbClient);
        });
    });

    // get one client 
    app.get("/clients/:id", function (req, res) {
        db.Client.findAll({
            where: {
                id: req.params.id
            },
        }).then(function (dbClient) {
            console.log("request sent");
            console.log(dbClient);
            res.json(dbClient);
        });
    });

    // create new client
    app.post("/newClient", function (req, res) {
        db.Client.create({
            client_name: req.body.entryClientName,
            client_contact: req.body.entryClientContact,
            contact_email: req.body.entryContactEmail,
            client_services: req.body.entryClientServices
        })
            .then(function (dbClients) {
                res.json(dbClients);
            });
    });


    // delete one client
    app.delete("/clients/:id", function (req, res) {
        db.Client.destroy({
            where: {
                id: req.params.id
            },
        }).then(function (dbClient) {
            res.json(dbClient);
        });
    });

    // edit one client
    app.put("/clients/:id", function (req, res) {
        db.Client.update(
            {
                client_name: req.body.entryClientName,
                client_contact: req.body.entryClientContact,
                contact_email: req.body.entryContactEmail,
                client_services: req.body.entryClientServices
            },
            {
                where: {
                    id: req.params.id
                },

            }).then(function (dbClient) {
                res.json(dbClient);
            });
    });
}
