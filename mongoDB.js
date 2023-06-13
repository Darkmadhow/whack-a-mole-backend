const mongoose = require("mongoose");

async function db(req, res) {
  try {
    const mongoDB = process.env.MONGODB_URI;
    mongoose.set("strictQuery", true);
    mongoose.connect(mongoDB);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
    res.status(500).send("Could not connect to database");
  }
}

module.exports = db;
