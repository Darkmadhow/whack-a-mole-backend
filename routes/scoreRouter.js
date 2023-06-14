const express = require("express");
const {
  getGlobalHighscore,
  getUserHighscore,
  uploadHighscore,
} = require("../controllers/scoreController");
const verifyToken = require("../middlewares/verifyToken");
const scoreRouter = express.Router();

scoreRouter
  .route("/")
  .get(verifyToken, getGlobalHighscore)
  .post(verifyToken, uploadHighscore);
scoreRouter.route("/:user_id").get(verifyToken, getUserHighscore);

module.exports = scoreRouter;
