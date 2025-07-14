const { model, Schema } = require("mongoose");

const gameSchema = new Schema(
  {
    name: String,
    slug: String,
    uuid: String,
    price: {
      digital: Number,
      physical: Number,
    },
    overview: { headline: String, body: String },
    description: String,
    tags: ["new"],
    thumbnail: { mobile: String, tablet: String, desktop: String },
    herobanner: { mobile: String, tablet: String, desktop: String },
    images: [{ mobile: String, tablet: String, desktop: String }],
    trailerurl: String,
    fileSize: Number,
    playModes: ["new"],
    numOfPlayer: String,
    system: ["new"],
    publisher: String,
    languages: ["new"],
    franchise: String,
    ageRating: String,
    genres: String,
    releaseDate: String,
    preOrderAvailable: Boolean,
    isOnSale: Boolean,
    nintendoPoints: Number,
  },
  { timestamps: true, versionKey: false }
);

const Game = model("game", gameSchema);

module.exports = Game;
