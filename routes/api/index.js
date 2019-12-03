const router = require("express").Router();

const cliRoute = require("./clientRoutes");
const projRoute = require("./projectRoutes");
const timeRoute = require("./timeEntryRoutes");

router.use("/clients", cliRoute);
router.use("/projects", projRoute);
router.use("/timeEntry", timeRoute);

module.exports = router;