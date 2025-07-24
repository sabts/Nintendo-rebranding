const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

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

const logout = (req, res) => {
  res.clearCookie("user");
  return res.status(200).json({
    message: "Sesión cerrada. Usuario desconectado.",
  });
};

const addProducts = async (req, res) => {
  const { productId } = req.body;

  req.user.cart.push(productId);
  await req.user.save();

  const product = await Product.findById(productId);
  res.json({ message: `el produucto ${productId} se ha agregadp añ carrito` });
};

module.exports = { register, login, logout };
