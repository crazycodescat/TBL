import { promises as fsPromises } from "fs";

export const readData = async () => {
  try {
    const productData = await fsPromises.readFile("../Products.json", "utf8");
    const jsonData = await JSON.parse(productData);
    return jsonData.products;
  } catch (error) {
    throw new Error("Error while Readind Data", error);
  }
};
