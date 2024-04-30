import express from "express";

// Controller functions
import { loginUser, signupUser } from "../controllers/userController.js";

const router = express.Router();
// Login Route
router.post("/login", loginUser);

// Signup Route
router.post("/signup", signupUser);

export default router;
