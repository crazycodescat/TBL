import { getAttributesById } from "./getAttributesById.js";
import { readData } from "../utils/readData.js";

export const getProducts = async (paramName) => {
  try {
    const allProducts = await readData();
    // get all products which have category === paramsName
    const filteredProducts = allProducts.filter((product) => {
      return product.category === paramName;
    });
    return filteredProducts;
  } catch (error) {
    console.error("Error reading or parsing JSON file:", error);
    throw error;
  }
};

export const getProductById = async (productId) => {
  try {
    const allProducts = await readData();
    const productFound = allProducts.find((product) => {
      return product.product_Id === parseInt(productId);
    });
    // console.log(productFound);

    if (!productFound) {
      throw new Error(`product not found with id + ${productId}`);
    }

    const attributeIds = productFound.variations.map(
      (variation) => variation.attributeId
    );

    //getting attributes
    const filteredAttributes = await getAttributesById(attributeIds);

    // Create a map of attributes using their IDs for efficient lookup
    const attributesMap = new Map(
      filteredAttributes.map((attribute) => [
        attribute.id,
        attribute.attributes,
      ])
    );

    // Update variations with attributes
    productFound.variations.forEach((variation) => {
      const attributeId = variation.attributeId;
      if (attributesMap.has(attributeId)) {
        // Merge attributes into the variation
        variation.attributes = attributesMap.get(attributeId);
      }
    });

    // console.log(JSON.stringify(productFound, null, 2));
    // // attributesMap.(2013);
    // console.log(attributesMap);
    return productFound;
  } catch (error) {
    throw error;
  }
};
