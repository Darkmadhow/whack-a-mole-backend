const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const Highscore = new Schema({
  user_id: {
    type: ObjectId,
    ref: "User",
    required: [true, "Must reference a user"],
  },
  score: { type: Number, required: [true, "Must specify a score"] },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("highscore", Highscore);
