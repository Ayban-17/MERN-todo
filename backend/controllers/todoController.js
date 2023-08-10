const Todo = require("../models/todoModel.js");

const createNewTodo = async (req, res) => {
  try {
    const { title, body } = req.body;

    const { _id } = req.user;
    const todo = await Todo.addTodo(title, body, _id);
    res.status(200).json({ msg: "Todo has been added successfully" });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getAllToDo = async (req, res) => {
  try {
    const todos = await Todo.getTodo();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getUsersTodo = async (req, res) => {
  try {
    const { _id } = req.user;
    const todos = await Todo.getPersonalTodo(_id);
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { createNewTodo, getAllToDo, getUsersTodo };
