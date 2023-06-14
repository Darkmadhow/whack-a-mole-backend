const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const {
    headers: { authorization },
  } = req;
  //is a token present?
  if (!authorization) throw new Error("Please log in");
  const decoded = jwt.verify(authorization, process.env.JWT_SECRET);
  //attach the payload to the req
  req.user_id = decoded.user_id;
  next();
}

module.exports = verifyToken;
