const {
  register,
  login,
  addFavoriteGames,
  getFavorites,
  addProducts,
  getShoppingCartGames,
  removeCartGames,
} = require("../../controllers/user.controller");

const router = require("express").Router();

router.get("/favorites", getFavorites);

router.post("/register", register);
router.post("/login", login);
router.post("/shopping-cart", getShoppingCartGames);

router.patch("/shopping-cart", addProducts);
router.patch("/favorites", addFavoriteGames);
router.patch("/shopping-cart/remove", removeCartGames);
module.exports = router;
