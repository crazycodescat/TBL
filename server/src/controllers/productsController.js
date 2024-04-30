import Product from '../models/productsModel.js';

const addProduct = async (req, res) => {
  //Add to Product
  const prod = req.body;
  try {
    const products = await Product.addProd(prod);
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
  // try {
  //   const cart = await Cart.add(cartData);
  //   res.json({ cart });
  // } catch (error) {
  //   res.status(400).json({ err: error.message });
  // }
};

const updateProduct = async (req, res) => {
  const updatedProduct = req.body;
  const fieldsToUpdate = req.query;
  try {
    await Product.updateProduct(fieldsToUpdate, updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { addProduct, updateProduct };
