const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./mongoDB");
const scoreRouter = require("./routes/scoreRouter");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");
require("dotenv").config();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());
app.use("/highscores", scoreRouter);
app.use("/users", userRouter);
app.use("/auth", authRouter);

db();

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
