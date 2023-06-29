const express = require("express");
const {
  getGlobalHighscore,
  getUserHighscore,
  uploadHighscore,
  getModeHighScore
} = require("../controllers/scoreController");
const verifyToken = require("../middlewares/verifyToken");
const scoreRouter = express.Router();

scoreRouter
  .route("/")
  .get(verifyToken, getGlobalHighscore)
  .post(verifyToken, uploadHighscore);
  scoreRouter.route("/mode/:gamemode").get(verifyToken, getModeHighScore);
scoreRouter.route("/personal/:gamemode").get(verifyToken, getUserHighscore);

module.exports = scoreRouter;
