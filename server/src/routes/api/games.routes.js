const Game = require("../../models/games.model")

const router = require('express').Router();

const createGame = async (req, res) => {
    const newGame = await Game.create(req.body)
    res.json(newGame)
}

module.exports = { createGame };