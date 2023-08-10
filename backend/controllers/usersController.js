const Users = require("../models/usersModel.js");
const jwt = require("jsonwebtoken");

const userRegister = async (req, res) => {
  try {
    const user = await Users.register(req.body);
    res.status(200).json({ msg: "Register succesfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const user = await Users.login(req.body);
    const { email, _id } = user;
    // create token
    try {
      const token = await jwt.sign({ email, _id }, process.env.SECRET, {
        expiresIn: "1d",
      });
      res.cookie("token", token).json({ email, _id });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const authenticateUser = async (req, res) => {
  try {
    const { token } = req.cookies;
    const userInfo = await jwt.verify(token, process.env.SECRET);
    res.json(userInfo);
  } catch (error) {
    Object.keys(error).length === 0
      ? res.status(400).json({ error: "Authetication failed" })
      : res.status(204).json({ error: error.message });
  }
};

const logoutUser = async (req, res) => {
  try {
    res.clearCookie("token").sendStatus(200);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { userLogin, userRegister, authenticateUser, logoutUser };
