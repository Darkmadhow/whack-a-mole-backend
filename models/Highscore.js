const mongoose = require("mongoose");
const gameModes = require("../utils/gameModes");
const { Schema, ObjectId } = mongoose;

const Highscore = new Schema({
  user: {
    type: ObjectId,
    ref: "user",
    required: [true, "Must reference a user"],
  },
  score: { type: Number, required: [true, "Must specify a score"] },
  date: { type: Date, default: Date.now },
  gamemode: {
    type: String,
    enum: gameModes,
    required: [true, "Must specify the gamemode"],
  },
});

module.exports = mongoose.model("highscore", Highscore);
