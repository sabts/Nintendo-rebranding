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

const filterGames = async (req, res) => {
  try {
    const {
      minPrice,
      tags,
      franchise,
      system,
      genres,
      ageRating,
    } = req.body;

    const filter = {};

    // Filtro por minPrice en digital o físico
    if (minPrice) {
      filter.$or = [
        { "price.digital": { $gte: Number(minPrice) } },
        { "price.physical": { $gte: Number(minPrice) } }
      ];
    }

    // Filtro por tags
    if (tags) {
      filter.tags = { $in: Array.isArray(tags) ? tags : [tags] };
    }

    // Filtro por franquicia
    if (franchise) {
      filter.franchise = franchise;
    }

    // Filtro por sistema
    if (system) {
      filter.system = { $in: Array.isArray(system) ? system : [system] };
    }

    // Filtro por géneros
    if (genres) {
      filter.genres = { $in: Array.isArray(genres) ? genres : [genres] };
    }

    // Filtro por clasificación de edad
    if (ageRating) {
      filter.ageRating = ageRating;
    }

    const games = await Game.find(filter);
    res.status(200).json(games);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error al obtener los juegos." });
  }
}

module.exports = { getGames, getGameById, createGame, filterGames };
