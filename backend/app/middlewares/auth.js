const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  const authHeader = req.header("Authorization")
  const token = authHeader.split(' ')[1]
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }

  try {
    const verified = jwt.verify(token, process.env.SECRET_KEY);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).send({ message: "Invalid token" });
  }
};