import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  product_Id: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
  },
  category: {
    type: String,
    required: true,
  },
  variations: [
    {
      variation_Id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      color: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      mrp: {
        type: Number,
        required: true,
      },
      discountPercentage: {
        type: Number,
        required: true,
      },
      stock: {
        type: Number,
        required: true,
      },
      images: [{ type: String, required: true }],
    },
  ],
});

productSchema.statics.addProd = async function (prod) {
  const products = await this.create(prod);
  return products;
};

productSchema.statics.updateProduct = async function (
  fieldsToUpdate,
  updatedProduct
) {
  // console.log(updatedProduct, fieldsToUpdate);
  const product = await this.findById(updatedProduct.productId);

  const productToBeUpdated = product.variations.filter((variation) => {
    // console.log(variation._id);
    return variation._id === updatedProduct.variation_Id;
  });

  console.log(productToBeUpdated);
};

export default mongoose.model('Product', productSchema);
