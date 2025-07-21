const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/user.model");


// -userID(se genera)
//     - birtday
//     - userName
//     - userNickname
//     - region
//     - email
//     - password
//     - profile picture{ img, color }

const register = async () => {
    req.body.password = bcrypt.hashSync(req.body.password, 9);
    const newUser = await User.create(req.body);
    res.json(newUser);
}

const login = async () => {
    const { email, password } = req.body;

    //busca los usarios que tengan el mismo email del body a la BD
    const existingEmail = await User.findOne({ email });

    if (!existingEmail)
        return res.status(401).json({ message: "Error in email or password" });

    //confirmamos que la contraseña sea correcta, pero esta encriptado
    const confirmPassword = bcrypt.compareSync(password, existingEmail.password);

    if (!confirmPassword)
        return res.status(401).json({ message: "Error in email or password" });
}

export {
    register, login
}