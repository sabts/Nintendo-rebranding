const { register, login } = require("../../controllers/user.controller");

const router = require("express").Router();

router.post("/register", register);
router.post("/loging", login);

module.exports = router;
