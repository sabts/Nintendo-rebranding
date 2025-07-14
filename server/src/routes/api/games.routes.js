const { createGame } = require("../../controllers/games.controller");

const router = require("express").Router();

router.post("/", createGame);

module.exports = router;
