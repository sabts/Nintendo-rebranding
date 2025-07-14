const { model, Schema } = require('mongoose')

const gameSchema = new Schema({
    name: String,
    slug: String,
    uuid: String,
    price: {
        digital: Number,
        physical: Number
    },
    overview: { headline: String, body: String },
    description: String,
    tags: ['new'],
    thumnnail: { mobile: String, tablet: String, desktop: String },
    herobanner: { mobile: String, tablet: String, desktop: String },
    images: { mobile: String, tablet: String, desktop: String },
    trailerurl: String,
    fileSize: Number,
    playModes: String,
    nOfPlayer: String,
    system: String,
    publisher: String,
    languages: ['new'],
    franchise: String,
    ageRating: String,
    genres: String,
    releseDate: String,
    preOrderAvailable: Boolean,
    isOnSale: Boolean,
    nintendoPoints: Number
}, { timestamps: true, versionKey: false })

const Game = model("game", gameSchema);

module.exports = Game