const {
  register,
  login,
  logout,
} = require("../../controllers/user.controller");

const router = require("express").Router();

router.get("/logout", logout);

router.post("/register", register);
router.post("/login", login);

module.exports = router;
