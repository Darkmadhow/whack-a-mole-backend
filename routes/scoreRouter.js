const express = require("express");
const {
  getGlobalHighscore,
  getUserHighscore,
  uploadHighscore,
} = require("../controllers/scoreController");
const scoreRouter = express.Router();

scoreRouter.route("/").get(getGlobalHighscore).post(uploadHighscore);
scoreRouter.route("/:user_id").get(getUserHighscore);

module.exports = scoreRouter;
