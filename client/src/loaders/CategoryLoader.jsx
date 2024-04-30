import { json } from "react-router-dom";

const categoryLoader = async ({ params }) => {
  const categoryParams = params.collectionName;
  const response = await fetch(
    "http://localhost:3003/api/products/category/" + categoryParams
  );
  if (!response.ok) {
    throw json(
      { message: `Could not fetch products for ${categoryParams}.` },
      { status: 404 }
    );
  }

  const categoryProducts = await response.json();
  return categoryProducts;
};

export default categoryLoader;
