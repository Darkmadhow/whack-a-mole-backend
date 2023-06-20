const User = require("../models/User");
const bcrypt = require("bcrypt");

// async function createUser(req, res) {
//   try {
//     const newUserData = req.body;
//     const newUser = await User.create(newUserData);
//     res.status(201).json(newEntry);
//   } catch (err) {
//     console.log(err);
//     res.status(500).send(err.message);
//   }
// }

async function updateUser(req, res) {
  try {
    const { user_id } = req.params;
    const { email, password } = req.body;
    let updatedUser;
    if (!password && email) {
      updatedUser = await User.findByIdAndUpdate(
        user_id,
        { email },
        {
          new: true,
        }
      );
    } else if (password && !email) {
      const hash = await bcrypt.hash(password, 8);
      updatedUser = await User.findByIdAndUpdate(
        user_id,
        { password: hash },
        {
          new: true,
        }
      );
    } else throw new Error("Specify either email or password");
    res.status(200).json(updatedUser);
  } catch (err) {
    console.log(err);
    res.status(500).send(err.message);
  }
}

module.exports = { updateUser };
