const {
  register,
  login,
  addFavoriteGames,
  getFavorites,
  addProducts,
} = require("../../controllers/user.controller");

const router = require("express").Router();

router.get("/favorites", getFavorites);

router.post("/register", register);
router.post("/login", login);

router.patch("/shopping-cart", addProducts);
router.patch("/favorites", addFavoriteGames);
module.exports = router;
