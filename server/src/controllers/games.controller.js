const Game = require("../models/games.model");

const createGame = async (req, res) => {
  const newGame = await Game.create(req.body);
  res.json(newGame);
};

module.exports = { createGame };
