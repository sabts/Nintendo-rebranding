const router = require("express").Router();

router.use("/games", require("./api/games.routes"));

//router.use("/user", require("./api/user.routes.js"));

module.exports = router;
