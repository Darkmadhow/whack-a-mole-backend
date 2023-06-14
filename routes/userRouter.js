const express = require("express");
const { createUser, updateUser } = require("../controllers/userController");
const verifyToken = require("../middlewares/verifyToken");
const userRouter = express.Router();

// userRouter.route("/").post(createUser);
userRouter.route("/:user_id").put(verifyToken, updateUser);

module.exports = userRouter;
