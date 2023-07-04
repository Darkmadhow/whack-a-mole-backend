const Highscore = require("../models/Highscore");
const User = require("../models/User");

async function uploadHighscore(req, res) {
  try {
    const { user_id } = req;
    const { score, gamemode } = req.body;

    // Find the count of highscores with a higher score
    const rank = await Highscore.countDocuments({ score: { $gt: score } });

    const newEntry = await Highscore.create({ user: user_id, score, gamemode });
    res.status(201).json({rank, newEntry});
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function getGlobalHighscore(req, res) {
  try {
    const allEntries = await Highscore.find()
      .populate("user")
      .sort({ score: -1 })
      .limit(process.env.HIGHSCORE_DISPLAY)
      .exec();
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function getUserHighscore(req, res) {
  try {
    const { user_id } = req;
    const {gamemode} = req.params;
    const user = await User.find({ _id: user_id });
    console.log("For id: ", user_id, "found user: ", user);
    if (!user) return res.status(404).send("No such user");
    const userHighscores = await Highscore.find({ user: user_id, gamemode })
      .populate("user")
      .sort({
        score: -1,
      });
    res.status(200).json(userHighscores);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function getModeHighScore(req,res){
  try {
    const {gamemode} = req.params;
    const allEntries = await Highscore.find({gamemode})
      .populate("user")
      .sort({ score: -1 })
      .limit(process.env.HIGHSCORE_DISPLAY)
      .exec();
    res.status(200).json(allEntries);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = { uploadHighscore, getGlobalHighscore, getUserHighscore, getModeHighScore };
