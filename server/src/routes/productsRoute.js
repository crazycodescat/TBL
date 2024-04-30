import express from 'express';
import { getProducts, getProductById } from '../controllers/getProducts.js';
import requireAuth from '../middleware/requireAuth.js';
import { addProduct,updateProduct } from '../controllers/productsController.js';

const router = express.Router();

// router.use(requireAuth);

router.get('/category/:productCategoryName', async (req, res) => {
  try {
    const paramName = req.params.productCategoryName;
    const filteredProducts = await getProducts(paramName);
    res.send(filteredProducts);
  } catch (error) {
    console.error('Error', error);
    res.status(404).send('The requested resource could not be found.');
  }
});

router.get('/product/:productId', async (req, res) => {
  try {
    const productId = req.params.productId; // Use the correct parameter name
    const productFounded = await getProductById(productId);
    console.log(productFounded);

    // getAttributesById();
    if (productFounded) {
      res.send(productFounded);
    }
  } catch (error) {
    res.status(404).send('The requested resource could not be found.');
  }
});

// Adding Product => Route
router.post('/addProduct/', requireAuth, addProduct);

// Updating Product => Route
router.post('/updateProduct/', requireAuth, updateProduct);

export default router;
