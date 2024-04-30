import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const createToken = async (_id) => {
  try {
    const token = jwt.sign({ _id: _id }, process.env.SECRET, {
      expiresIn: "7d",
    });
    return token;
  } catch (error) {
    throw new Error("Couldn't not Create Token!" + error);
  }
};

//login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userId = await User.login(email, password);
    const token = await createToken(userId);
    res.status(200).json({ userId, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//signup user
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userId = await User.signup(email, password);
    const token = await createToken(userId);
    res.status(200).json({ userId, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { signupUser, loginUser };
