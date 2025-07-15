const Game = require("../models/games.model");

const getGames = async (req, res) => {
  const games = await Game.find();
  res.json(games);
};

const createGame = async (req, res) => {
  const newGame = await Game.create(req.body);
  res.json(newGame);
};

const getGameById = async (req, res) => {
  const { uuid } = req.params;
  const game = await Game.findOne({ uuid });
  res.json(game);
};

module.exports = { getGames, getGameById, createGame };
