import { json } from "react-router-dom";

export const productLoader = async ({ params }) => {
  const product_Id = params.productId;

  const response = await fetch(
    `${import.meta.env.VITE_BASE_PROD_URL}/api/products/product/${product_Id}`
  );

  if (!response.ok) {
    throw json(
      { message: `Could not fetch product for ${product_Id}.` },
      { status: 404 }
    );
  }

  const product = await response.json();
  return product;
};

export default productLoader;
