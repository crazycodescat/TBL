import express from "express";

// Controller functions
import {
  addToCart,
  removeFromCart,
  deleteFromCart,
  getAllCartItems,
} from "../controllers/cartController.js";

const router = express.Router();

// product add to cart :#route
router.post("/add", addToCart);

// get all cart items :#route
router.post("/getCartItems", getAllCartItems);

// product remove from cart :#route
router.put("/remove", removeFromCart);

// product delete from cart :#route
router.delete("/delete", deleteFromCart);

export default router;
