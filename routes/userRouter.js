const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");
const userRouter = express.Router();

userRouter.route("/").post(createUser);
userRouter.route("/:user_id").put(updateUser);

module.exports = userRouter;
