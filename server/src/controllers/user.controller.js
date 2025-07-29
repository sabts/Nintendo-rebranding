const bcrypt = require("bcryptjs");

const User = require("../models/user.model");
const Game = require("../models/games.model");

const generateUserCode = () => {
  const userCodeRegex = /^[A-Z]{2}\d{12}$/;

  const generateLetter = () =>
    String.fromCharCode(65 + Math.floor(Math.random() * 26));

  const generateNumber = () =>
    Math.floor(Math.random() * 900000000000) + 100000000000;

  let code = "";

  while (!userCodeRegex.test(code)) {
    code = `${generateLetter()}${generateLetter()}${generateNumber()}`;
  }

  return code;
};

const register = async (req, res) => {
  req.body.userCode = generateUserCode();
  req.body.password = bcrypt.hashSync(req.body.password, 9);
  const newUser = await User.create(req.body);
  res.json(newUser);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const existingEmail = await User.findOne({ email });

  if (!existingEmail)
    return res.status(401).json({ message: "Error in email or password" });

  const confirmPassword = bcrypt.compareSync(password, existingEmail.password);

  if (!confirmPassword)
    return res.status(401).json({ message: "Error in email or password" });

  return res.status(200).json(existingEmail);
};

const addProducts = async (req, res) => {
  const { gameId, userId } = req.body;
  const user = await User.findById(userId);
  user.shoppingCart.push(gameId);
  await user.save();

  return res.status(200).json({
    message: "Product added to cart successfully",
    shoppingCart: user.shoppingCart,
  });
};

const getShoppingCartGames = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  const gamesInCart = await Game.find({ _id: { $in: user.shoppingCart } });

  res.json(gamesInCart);
};

const removeCartGames = async (req, res) => {
  const { gameId, userId } = req.body;

  const user = await User.findByIdAndUpdate(
    userId,
    { $pull: { shoppingCart: gameId } },
    { new: true }
  );

  return res.status(200).json({
    message: "Product removed from cart successfully",
    shoppingCart: user.shoppingCart,
  });
};

const addFavoriteGames = async (req, res) => {
  const { gameId, userId, state } = req.body;

  console.log(gameId, userId, state);
  const user = await User.findById(userId);
  const game = await Game.findById(gameId);

  const isFavorite = user.favorites.includes(gameId);
  console.log(isFavorite);
  if (!isFavorite) {
    user.favorites.push(gameId);
    await user.save();
    return res.json({ message: "Juego agregado a tus favoritos." });
  }

  if (isFavorite) {
    console.log(user.favorites);
    user.favorites = user.favorites.filter(id => id.toString() !== gameId);
    await user.save();
    return res.json({ message: "Juego eliminado de tus favoritos." });
  }

  res.json("funciona por favor:(");
};

const getFavorites = async (req, res) => {
  const { userId } = req.body;

  const user = await User.findById(userId);
  const favoriteGames = await Game.find({
    _id: { $in: user.favorites },
  }).lean();

  if (favoriteGames.length === 0) {
    return res
      .status(200)
      .json({ message: "You don't have favorite games yet" });
  }

  res.json(favoriteGames);
};

module.exports = {
  register,
  login,
  addFavoriteGames,
  getFavorites,
  addProducts,
  removeCartGames,
  getShoppingCartGames,
};
