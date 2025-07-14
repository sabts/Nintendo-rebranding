const router = require("express").Router();

router.use("/games", require("./api/games.routes"));

module.exports = router;
