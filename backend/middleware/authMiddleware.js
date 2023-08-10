const jwt = require("jsonwebtoken");
const User = require("../models/usersModel");

const protect = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) return res.status(401).json({ error: "Request Unauthorized" });

    const { _id } = jwt.verify(token, process.env.SECRET);

    req.user = await User.findOne({ _id }).select("_id");

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: "Request Unauthorized" });
  }
};

module.exports = protect;
