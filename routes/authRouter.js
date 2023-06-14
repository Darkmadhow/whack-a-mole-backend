const express = require("express");
const validateJOI = require("../middlewares/validateJOI.js");
const {
  sigupSchema,
  siginSchema,
  highscoreSchema,
} = require("../joi/schemas.js");
const { getUser, signIn, signUp } = require("../controllers/authController.js");
const verifyToken = require("../middlewares/verifyToken.js");

const authRouter = express.Router();

authRouter.post("/signup", validateJOI(sigupSchema), signUp, signIn);
authRouter.post("/signin", validateJOI(siginSchema), signIn);
authRouter.get("/me", verifyToken, getUser);

module.exports = authRouter;
