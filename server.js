var express = require("express");
var path = require("path");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var cors = require("cors");

// Sets up the Express App
var app = express();
var PORT = process.env.PORT || 8080;
app.use(cors()); // adds routes, both API and view

// Requires models for synching
var db = require("./models");

// Set up express application
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

// Routes
require("./routes/api/entriesRoute");

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
    });
}

else {
    app.use(express.static(path.join(__dirname, "./client/public")));
    app.get("/*", function (req, res) {
        res.sendFile(path.join(__dirname, "./client/public/index.html"));
    })
}

// Sync sequelize models and then start Express app
db.sequelize.sync({
    force: false
}).then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});