const User = require("../models/User.js");
const asyncHandler = require("../utils/asyncHandler.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signUp = asyncHandler(async (req, res, next) => {
  const {
    body: { username, email, password },
  } = req;
  //check if User exists
  const found = await User.findOne({ username });
  if (found) throw new Error("User already exists");
  //hash password and generate token
  const hash = await bcrypt.hash(password, 8);
  const newUser = await User.create({
    username,
    email,
    password: hash,
  });
  //   const token = jwt.sign({ user_id: newUser._id }, process.env.JWT_SECRET);
  //   res.json({ token });
  next();
});

const signIn = asyncHandler(async (req, res, next) => {
  const {
    body: { username, password },
  } = req;
  //see if user exists
  const found = await User.findOne({ username }).select("+password");
  if (!found) throw new Error("User doesn't exists");
  //compare password
  const match = await bcrypt.compare(password, found.password);
  if (!match) throw new Error("Incorrect passwort");
  const token = jwt.sign({ user_id: found._id }, process.env.JWT_SECRET);
  res.json({ token });
});

const getUser = asyncHandler(async (req, res, next) => {
  const { user_id } = req;
  const user = await User.findById(user_id);
  res.json(user);
});

module.exports = { signUp, signIn, getUser };
