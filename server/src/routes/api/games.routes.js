const {
  createGame,
  getGameById,
  getGames,
} = require("../../controllers/games.controller");

const router = require("express").Router();

router.get("/", getGames);
router.get("/:uuid", getGameById);

router.post("/", createGame);

module.exports = router;
