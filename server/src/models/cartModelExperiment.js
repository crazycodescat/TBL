// import mongoose from "mongoose";

// const cartSchema = new mongoose.Schema({
//   user: {
//     type: String,
//     required: true,
//     index: false,
//   },
//   items: [
//     {
//       variationId: {
//         type: String,
//         required: true,
//         index: false,
//       },
//       price: {
//         type: Number,
//         required: true,
//         index: false,
//       },
//       quantity: {
//         type: Number,
//         default: 1,
//       },
//     },
//   ],
//   totalAmount: {
//     type: Number,
//     default: 0,
//     index: false,
//   },
// });

// // Static method to add a product to the cart
// cartSchema.statics.add = async function (cartData) {
//   const { user, totalAmount, cartItem } = cartData;
//   // console.log(typeof cartItem);

//   try {
//     const exists = await this.findOne({ user: cartData.user });

//     if (exists) {
//       const existedVariation = exists.items.find((item) => {
//         return item.variationId == cartItem.variationId;
//       });

//       // console.log(existedVariation + "33");

//       if (existedVariation) {
//         const variationObjectId = existedVariation._id;
//         const cartItem = await this.findOneAndUpdate(
//           {
//             "items._id": variationObjectId,
//           },
//           {
//             $inc: { "items.$.quantity": 1 },
//           },
//           { new: true } // Returns the updated document
//         );

//         // Aggregate to calculate the sum of prices in the items array
//         const aggregationResult = await this.aggregate([
//           { $match: { user } },
//           {
//             $project: {
//               totalAmount: { $sum: "$items.price" },
//             },
//           },
//         ]);

//         // Extract the totalAmount from the aggregation result
//         const newTotalAmount = aggregationResult[0].totalAmount;

//         // Update the cart with the new totalAmount
//         const updatedCart = await this.findOneAndUpdate(
//           { user },
//           { $set: { totalAmount: newTotalAmount } },
//           { new: true } // Returns the updated document
//         );

//         return updatedCart;
//       } else {
//         // Update the cart by pushing a new item into the items array
//         const newItemInserted = await this.findOneAndUpdate(
//           { user: user },
//           { $push: { items: cartItem } },
//           { new: true } // Returns the updated document
//         );

//         // Aggregate to calculate the sum of prices in the items array
//         const aggregationResult = await this.aggregate([
//           { $match: { user } },
//           {
//             $project: {
//               totalAmount: { $sum: "$items.price" },
//             },
//           },
//         ]);

//         // Extract the totalAmount from the aggregation result
//         const newTotalAmount = aggregationResult[0].totalAmount;

//         // Update the cart with the new totalAmount
//         const updatedCart = await this.findOneAndUpdate(
//           { user },
//           { $set: { totalAmount: newTotalAmount } },
//           { new: true } // Returns the updated document
//         );
//         return updatedCart;
//       }
//     }

//     const cart = await this.create({
//       user: cartData.user,
//       items: [cartData.cartItem],
//       totalAmount: cartData.totalAmount,
//     });

//     // console.log(cart);
//     return cart;
//   } catch (error) {
//     return error.message;
//   }
// };

// // Helper function to calculate total amount based on items
// async function calculateTotalAmount(items) {
//   return items.reduce((total, item) => {
//     return total + item.quantity; // Adjust this based on your product price logic
//   }, 0);
// }

// cartSchema.statics.remove = async function (email, password) {};

// export default mongoose.model("Cart", cartSchema);
