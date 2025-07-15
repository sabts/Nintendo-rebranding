const bcrypt = require("bcryptjs");

const User = require("../models/user.model");

const register = async (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, 9);
  const newUser = await User.create(req.body);
  res.json(newUser);
};
module.exports = { register };
