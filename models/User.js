const mongoose = require("mongoose");
const { Schema } = mongoose;

const User = new Schema({
  username: { type: String, required: [true, "Must specify a Username"] },
  email: { type: String, required: [true, "Must specify an email address"] },
  password: { type: String, required: [true, "Must specify a password"] },
});

module.exports = mongoose.model("user", User);
