import Cart from "../models/cartModel.js";

//Add to cart
const addToCart = async (req, res) => {
  const cartData = req.body;
  // console.log(cartData);
  try {
    const cart = await Cart.add(cartData);
    res.json({ cart });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

// Get cart items
const getAllCartItems = async (req, res) => {
  const cartData = req.body;
  // console.log(cartData);
  try {
    const cart = await Cart.getCartItems(cartData);
    res.json(cart[0]);
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

//Remove from cart
const removeFromCart = async (req, res) => {
  const cartData = req.body;
  try {
    const cart = await Cart.removeFromCart(cartData);
    res.json({ cart });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

//Remove from cart
const deleteFromCart = async (req, res) => {
  const cartData = req.body;
  try {
    const cart = await Cart.deleteFromCart(cartData);
    res.json({ cart });
  } catch (error) {
    res.status(400).json({ err: error.message });
  }
};

export { addToCart, removeFromCart, deleteFromCart, getAllCartItems };
