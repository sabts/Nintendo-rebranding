const {
  register,
  login,
  addFavoriteGames,
  getFavorites,
} = require("../../controllers/user.controller");

const router = require("express").Router();

router.get("/favorites", getFavorites);

router.post("/register", register);
router.post("/login", login);
router.post("/favorites", addFavoriteGames);

module.exports = router;
