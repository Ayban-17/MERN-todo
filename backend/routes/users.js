const router = require("express").Router();
const {
  userLogin,
  userRegister,
  authenticateUser,
  logoutUser,
} = require("../controllers/usersController.js");

router.post("/login", userLogin);

router.post("/register", userRegister);

router.post("/auth", authenticateUser);

router.post("/logout", logoutUser);

module.exports = router;
