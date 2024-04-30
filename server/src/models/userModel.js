import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import Cart from "./cartModel.js";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (email, password) {
  // validation
  // console.log(email, password);
  if (!email || !password) {
    throw new Error("All Fields must be filled");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email or password is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password must be strong!");
  }

  const exists = await this.findOne({ email });

  if (exists) {
    throw new Error("Email already Exists");
  }

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });
  return user._id;
};

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("All fields must be filled");
  }

  const user = await this.findOne({ email });

  if (!user) throw Error("Email or Password is incorrect");

  const match = await bcrypt.compare(password, user.password);

  if (!match) throw Error("Email or Password is incorrect");

  //retrieve cart items length
  const userId = user._id.toString();
  return userId;
};

export default mongoose.model("User", userSchema);