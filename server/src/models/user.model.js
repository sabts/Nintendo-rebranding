const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  userName: String,
  userNickname: String,
  region: String,
  email: String,
  password: String,
  birthday: String,
  //TODO: relacio 1-N
  favorite: [],
  gamesOwned: [
    {
      gameInfo: {
        gameCode: {
          type: String,
          required: true,
        },
        dateRegistered: {
          type: Date,
          default: Date.now,
        },
      },
      gameAchievements: [
        {
          type: String,
        },
      ],
    },
  ],
  friends: [
    {
      friends: [],
      reques: [],
    },
  ],
  points: Number,
  profilePicture: {
    img: String,
    backgroundColor: String,
  },
  shoppingCart: [],
});

// -userID
//     - userName
//     - birtday
//     - userNickname
//     - region
//     - email
//     - password
//     - favorite
//     - gamesOwned{gameInfo{date register, code }, game Achivements }
// -friends
//     - points
//     - profile picture{ img, color }
// -shoppingCart[]

// relacion 1 N mongo db
// RELACION N - M entre usarios en mongo db

const User = model("user", userSchema);

module.exports = User;
