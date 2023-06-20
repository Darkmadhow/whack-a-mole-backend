const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const validateJOI = require("../middlewares/validateJOI.js");
const { updateSchema } = require("../joi/schemas.js");
const userRouter = express.Router();

// userRouter.route("/").post(createUser);
userRouter
  .route("/:user_id")
  .put(verifyToken, validateJOI(updateSchema), updateUser);

module.exports = userRouter;
