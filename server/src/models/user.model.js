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
  points: { type: Number, default: 0 },
  profilePicture: {
    img: String,
    backgroundColor: String,
  },
});

const User = model("user", userSchema);

module.exports = User;
