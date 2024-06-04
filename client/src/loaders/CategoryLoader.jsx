import { json } from 'react-router-dom';

const categoryLoader = async ({ params }) => {
  const categoryParams = params.collectionName;

  const response = await fetch(
    `${import.meta.env.VITE_BASE_URL}/api/products/category/${categoryParams}`
  );

  if (!response.ok) {
    throw json(
      { message: `Could not fetch products for ${categoryParams}.` },
      { status: 404 }
    );
  }

  const categoryProducts = await response.json();
  console.log(categoryProducts);
  return categoryProducts;
};

export default categoryLoader;
