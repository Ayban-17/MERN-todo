const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
    userID: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

todoSchema.statics.addTodo = async function (title, body, _id) {
  if (!title) throw Error("Title is required");
  if (!body) throw Error("Body of todo is required");

  const todo = await this.create({ title, body, userID: _id });

  return todo;
};

todoSchema.statics.getTodo = async function () {
  const todos = await this.find({})
    .sort({ createdAt: -1 })
    .populate("userID", ["email"]);
  return todos;
};

todoSchema.statics.getPersonalTodo = async function (_id) {
  const personalTodo = await this.find({ userID: _id })
    .sort({ createdAt: -1 })
    .populate("userID", ["email"]);
  return personalTodo;
};
const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
