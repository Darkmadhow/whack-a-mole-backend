const Highscore = require("../models/Highscore");
const User = require("../models/User");

async function uploadHighscore(req, res) {
  try {
    const { user_id } = req;
    const { score } = req.body;
    const newEntry = await Highscore.create({ user_id, score });
    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function getGlobalHighscore(req, res) {
  try {
    const allEntries = await Highscore.find()
      .sort({ score: -1 })
      .limit(process.env.HIGHSCORE_DISPLAY);
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function getUserHighscore(req, res) {
  try {
    const { user_id } = req;
    const user = await User.find({ _id: user_id });
    console.log("For id: ", user_id, "found user: ", user);
    if (!user) return res.status(404).send("No such user");
    const userHighscores = await Highscore.find({ user_id }).sort({
      score: -1,
    });
    res.status(200).json(userHighscores);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = { uploadHighscore, getGlobalHighscore, getUserHighscore };
