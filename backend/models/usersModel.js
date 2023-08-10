const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

userSchema.statics.register = async function (body) {
  const { email, password } = body;

  if (!password) throw Error("Password is required");

  if (!email) throw Error("Email address is required");

  if (!validator.isEmail(email))
    throw Error("Please enter a valid email address");

  if (!validator.isStrongPassword(password)) {
    throw Error(
      "Password must consist of small and big letters, numbers and special characters"
    );
  }
  const exists = await this.findOne({ email });

  if (exists) throw Error("Email already in use.");

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

userSchema.statics.login = async function (body) {
  const { email, password } = body;

  if (!password || !email) throw Error("All fields are required");

  const user = await this.findOne({ email });

  if (!user) throw Error("Email does not exist");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw Error("Incorrect Password");

  return user;
};

const Users = mongoose.model("User", userSchema);

module.exports = Users;
