const User = require("../models/User");

async function createUser(req, res) {
  try {
    const newUserData = req.body;
    const newUser = await User.create(newUserData);
    res.status(201).json(newEntry);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

async function updateUser(req, res) {
  try {
    const { user_id } = req.params;
    const newUserData = req.body;
    const updatedUser = await User.findByIdAndUpdate(user_id, newUserData, {
      new: true,
    });
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = { createUser, updateUser };
