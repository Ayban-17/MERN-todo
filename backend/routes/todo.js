const router = require("express").Router();
const {
  createNewTodo,
  getAllToDo,
  getUsersTodo,
} = require("../controllers/todoController.js");

const protect = require("../middleware/authMiddleware.js");

router.get("/", getAllToDo);

router.use(protect);

router.post("/add", createNewTodo);

router.post("/", getUsersTodo);

module.exports = router;
