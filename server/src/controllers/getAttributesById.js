import { promises as fsPromises } from "fs";

export const getAttributesById = async (attributeIds) => {
  try {
    const ProductsAttribtes = await fsPromises.readFile(
      "../attributes.json",
      "utf8"
    );
    const jsonData = await JSON.parse(ProductsAttribtes);
    const productAttributes = jsonData;
    const filteredAttributes = productAttributes.filter((attribute) =>
      attributeIds.includes(attribute.id)
    );

    if (filteredAttributes.length < 1) {
      throw new Error(`product attributes not found with id + ${attributeIds}`);
    }
    return filteredAttributes;
  } catch (error) {
    // console.error(error);
    throw error;
  }
};
