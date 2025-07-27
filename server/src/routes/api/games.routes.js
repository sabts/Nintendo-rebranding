const {
  createGame,
  getGameById,
  getGames,
  filterGames,
} = require("../../controllers/games.controller");

const router = require("express").Router();

router.get("/", getGames);
router.get("/:uuid", getGameById);

router.post("/", createGame);
router.post("/filters", filterGames);

module.exports = router;
