import { json } from "react-router-dom";

export const productLoader = async ({ params }) => {
  const product_Id = params.productId;
  // console.log(product_Id);
  const response = await fetch(
    `http://localhost:3003/api/products/product/${product_Id}`
  );
  if (!response.ok) {
    throw json(
      { message: `Could not fetch product for ${product_Id}.` },
      { status: 404 }
    );
  }

  const product = await response.json();
  // console.log(product);
  return product;
};

export default productLoader;
