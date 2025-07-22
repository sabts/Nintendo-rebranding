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

  //busca los usarios que tengan el mismo email del body a la BD
  const existingEmail = await User.findOne({ email });

  if (!existingEmail)
    return res.status(401).json({ message: "Error in email or password" });

  //confirmamos que la contraseña sea correcta, pero esta encriptado
  const confirmPassword = bcrypt.compareSync(password, existingEmail.password);

  if (!confirmPassword)
    return res.status(401).json({ message: "Error in email or password" });
};

module.exports = { register, login }
