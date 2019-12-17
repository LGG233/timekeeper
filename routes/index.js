const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

const cliRoute = require("./api/clientRoutes");
const projRoute = require("./api/projectRoutes");
const timeRoute = require("./api/timeRoutes");

//API routes
router.use("/", cliRoute);
router.use("/", projRoute);
router.use("/", timeRoute);

// API Routes
// router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../../client/build/index.html"));
// });

module.exports = router;