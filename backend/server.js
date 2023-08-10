require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");

const usersRoute = require("./routes/users.js");
const todoRoutes = require("./routes/todo.js");

//instatiation
const app = express();
const port = process.env.PORT || 4000;
const db_uri = process.env.MONGO_URI;

//middleware
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use("/api/v1/users", usersRoute);
app.use("/api/v1/todo", todoRoutes);

//db connection
mongoose
  .connect(db_uri)
  .then(() => {
    app.listen(port, () => console.log("Listening on port: " + port));
    console.log("connected to database");
  })
  .catch((error) => {
    console.log(error);
  });
