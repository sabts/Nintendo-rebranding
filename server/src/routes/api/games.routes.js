const {
  createGame,
  getGameById,
} = require("../../controllers/games.controller");

const router = require("express").Router();

router.post("/", createGame);
router.get("/:uuid", getGameById);

module.exports = router;
