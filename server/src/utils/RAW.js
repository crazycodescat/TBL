const { user, items } = cartData;
console.log(cartData);
const exists = await this.findOne({ user: parseInt(user) });
try {
  const cart = await this.findOne({ user: parseInt(cartData.user) });
  console.log(cart.cart.user + "32");

  if (!cart) {
    const newCart = await this.create(cartData);
    return newCart.save();
  }

  console.log("hello");

  items.forEach(({ variationId }) => {
    const existingProduct = cart.items.find((item) => {
      return item.variationId === variationId;
    });
    console.log(existingProduct + "45");

    if (existingProduct) {
      existingProduct.quantity += quantity;
      existingProduct.price *= existingProduct.quantity;
      this.findAndupdateProduct(existingProduct);
      console.log(existingProduct + "51");
    } else {
      // const updatedCart = cart.items.push({ variationId, price, quantity });
      console.log("hey!!");
    }
    console.log(existingProduct);
  });

  if (existingProduct) {
    existingProduct.quantity += quantity;
  } else {
    cart.items.push({ variationId, quantity });
  }

  cart.totalAmount = await calculateTotalAmount(cart.items);
} catch (error) {
  throw new Error("error adding product to cart");
}
