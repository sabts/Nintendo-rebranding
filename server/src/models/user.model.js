const { model, Schema } = require("mongoose");

const userSchema = new Schema({
  name: String,
  userCode: String,
  nickname: String,
  region: String,
  email: String,
  password: String,
  birthday: Date,
  favorites: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
  gamesOwned: [
    {
      game: {
        type: Schema.Types.ObjectId,
        ref: "game",
      },
      gameInfo: {
        gameCode: String,
        dateRegistered: {
          type: Date,
          default: Date.now,
        },
      },
      gameAchievements: [String],
    },
  ],
  friends: {
    accepted: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
    requests: [
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  shoppingCart: [
    {
      type: Schema.Types.ObjectId,
      ref: "game",
    },
  ],
  points: Number,
  profilePicture: {
    img: String,
    backgroundColor: String,
  },
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
