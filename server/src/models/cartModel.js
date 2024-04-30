import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId, // Reference to User model
    ref: 'User', // Collection name
    required: true,
  },
  items: [
    {
      variationId: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
      name: {
        type: String,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      color: {
        type: String,
      },
      image: {
        type: String,
        required: true,
      },
      size: {
        type: String,
      },
    },
  ],
  totalAmount: {
    type: Number,
    default: 0,
  },
});

// Static method to add a product to the cart
cartSchema.statics.add = async function (cartData) {
  const { user, cartItem } = cartData;
  try {
    const existedUser = await this.findOne({ user });

    if (!existedUser) {
      // console.log(cartItem);
      const defaultQuantity = 1;
      cartItem.quantity = defaultQuantity;
      const totalAmount = cartItem.quantity * cartItem.price;

      const cartDocument = {
        user,
        items: [cartItem],
        totalAmount,
      };

      const cart = await this.create(cartDocument);
      return cart;
    }

    const variationExisted = existedUser.items.find((item) => {
      return item.variationId === cartItem.variationId;
    });

    if (!variationExisted) {
      const newItem = {
        variationId: cartItem.variationId,
        price: cartItem.price,
        quantity: 1,
      };
      const totalAmount = newItem.quantity * newItem.price;
      existedUser.items.push(cartItem);
      existedUser.totalAmount += totalAmount;
      // console.log(existedUser + "73");

      existedUser.save();
      return existedUser;
    }

    if (variationExisted.quantity >= 5) {
      throw new Error(`maximum quantity 5 you could purchase`);
    }

    variationExisted.quantity += 1;
    await existedUser.save();

    let calculatedtTotalAmount = 0;

    existedUser.items.forEach((item) => {
      calculatedtTotalAmount += item.quantity * item.price;
    });

    existedUser.totalAmount = calculatedtTotalAmount;
    existedUser.save();
    return existedUser;
  } catch (error) {
    throw new Error('Error while adding cart item: ' + error.message);
  }
};

// Static method to remove a product from the cart
cartSchema.statics.removeFromCart = async function (cartData) {
  const { user, variationId } = cartData;
  try {
    // Find the cart by user
    const cart = await this.findOne({ user });

    if (!cart) {
      throw new Error('Cart not found');
    }

    // Find the index of the item to be removed
    const foundedVariationIndex = cart.items.findIndex((item) => {
      return item.variationId === variationId;
    });

    if (foundedVariationIndex === -1) {
      throw new Error('Cart item not found');
    }

    const foundedVariation = cart.items[foundedVariationIndex];

    if (foundedVariation.quantity <= 1) {
      // Remove the item from the array
      cart.items.splice(foundedVariationIndex, 1);
    } else {
      foundedVariation.quantity -= 1;
    }

    let calculatedtTotalAmount = 0;
    cart.items.forEach((item) => {
      calculatedtTotalAmount += item.quantity * item.price;
    });

    // Update totalAmount if needed
    cart.totalAmount = +calculatedtTotalAmount;

    // Save the updated cart
    cart.save();
    console.log(cart);
    return cart;
  } catch (error) {
    throw new Error('Error while removing cart item: ' + error.message);
  }
};
// Static method to remove a product from the cart
cartSchema.statics.deleteFromCart = async function (cartData) {
  const { user, variationId } = cartData;
  try {
    const cart = await this.findOne({ user });
    if (!cart) {
      throw new Error('Cart not found');
    }
    const foundedVariationIndex = cart.items.findIndex((item) => {
      return item.variationId === variationId;
    });

    console.log(foundedVariationIndex + '  149');

    if (foundedVariationIndex === -1) {
      throw new Error('Cart item not found');
    }

    cart.items.splice(foundedVariationIndex, 1);

    let calculatedtTotalAmount = 0;
    cart.items.forEach((item) => {
      calculatedtTotalAmount += item.quantity * item.price;
    });

    cart.totalAmount = calculatedtTotalAmount;
    cart.save();
    return cart;
  } catch (error) {
    throw new Error('Error while removing cart item: ' + error.message);
  }
};

cartSchema.statics.getCartItems = async function (cartData) {
  const { user } = cartData;
  console.log(user);
  const cart = this.find({ user });
  return cart;
};

export default mongoose.model('Cart', cartSchema);
