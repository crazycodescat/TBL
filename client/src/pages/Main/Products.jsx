import { useLoaderData, useParams } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

import ProductsItems from "../../components/productsPage/ProductsItems";
import ProductsFilter from "../../components/productsPage/ProductsFilter";
import { useCallback, useEffect, useState } from "react";

// const products = [
//   {
//     _id: 1,
//     name: "Fire-Boltt Ninja 3 Plus 1.83 Display Smartwatch Full Touch with 100+ Sports Modes with IP68, Sp02 Tracking, Over 100 Cloud Based Watch Faces (Beige)",
//     image: "../images/61+8syDuv4L._SL1500_.jpg",
//     mrp: 9999,
//     discountPercentage: 80,
//   },
//   {
//     _id: 2,
//     name: "mi Smart Watch for Kids Men Boys Girls & Women Waterproof for Men - ID116 Touchscreen Bluetooth Smartwatch with Blood Pressure Tracking, Heart Rate Sensor and Basic Functionality (Black)",
//     image: "../images/51K+Nm5-XxL.jpg",
//     mrp: 1989,
//     discountPercentage: 80,
//   },
//   {
//     _id: 6,
//     name: "Fastrack Limitless FS1 Pro Smart Watch|1.96 Super AMOLED Arched Display with 410x502 Pixel Resolution|SingleSync BT Calling|NitroFast Charging|110+ Sports Modes|200+ Watchfaces|Upto 7 Days Battery",
//     image: "../images/81jTH37c73L._SL1500_.jpg",
//     mrp: 7559,
//     discountPercentage: 80,
//   },
//   {
//     _id: 3,
//     name: "Fastrack New Limitless Glide Advanced UltraVU HD Display|BT Calling|ATS Chipset|100+ Sports Modes & Watchfaces|Calculator|Voice Assistant|in-Built Games|24 * 7 Health Suite|IP68 Smartwatch(Black)",
//     image: "../images/61JtVmcxb0L._SL1080_.jpg",
//     mrp: 3995,
//     discountPercentage: 80,
//   },
//   {
//     _id: 4,
//     name: "Noise ColorFit Ultra 3 Bluetooth Calling Smart Watch with Biggest 1.96 AMOLED Display, Premium Metallic Build, Functional Crown, Gesture Control with Metallic Strap (Glossy Silver: Elite Edition)",
//     image: "../images/71hUqNCL-zL._SL1500_.jpg",
//     mrp: 9999,
//     discountPercentage: 80,
//   },
//   {
//     _id: 5,
//     name: "Infinity - JBL Clubz Mini, Wireless Ultra Portable Mini Speaker with Mic,",
//     image: "../images/71qNKXZftLS._SL1500_.jpg",
//     mrp: 1999,
//     discountPercentage: 80,
//   },
// ];

function Products() {
  const { collectionName } = useParams();
  const categoryProducts = useLoaderData();
  // console.log(categoryProducts);
  const [intialProducts, setProducts] = useState([]);
  const [isProducts, setIsProducts] = useState(false);

  const filterVariations = useCallback(() => {
    const products = categoryProducts.map((product) => {
      const firstVariation = product.variations[0];
      const firstImage = firstVariation.images[0];
      return {
        product_Id: product.product_Id,
        variations: firstVariation,
        images: firstImage,
      };
    });
    setProducts(products);
  }, [categoryProducts]);

  useEffect(() => {
    if (categoryProducts.length === 0) {
      setIsProducts(false);
      return;
    }
    setIsProducts(true);
    filterVariations();
  }, [filterVariations, categoryProducts.length]);

  return (
    <>
      {/* <ProductsFilter /> */}
      <div className="flex flex-col gap-3">
        <h1 className="ml-3">Home Theatre Systems & Soundbars</h1>
        <ProductsFilter />

        {/* hide */}
        {isProducts ? (
          <div className="flex flex-col lg:grid lg:grid-cols-3-1fr gap-2 p-2 bg-white">
            {intialProducts.map((product) => {
              const discountedPrice = Math.floor(
                (product.variations.mrp *
                  (100 - product.variations.discountPercentage)) /
                  100
              );
              const formattedMRP = product.variations.mrp.toLocaleString();

              return (
                <ProductsItems
                  key={uuidv4()}
                  images={product.images}
                  product={product.variations}
                  discountedPrice={discountedPrice}
                  formattedMRP={formattedMRP}
                  product_Id={product.product_Id}
                  variation_Id={product.variations.variation_Id}
                  collectionName={collectionName}
                  discountPercentage={product.variations.discountPercentage}
                />
              );
            })}
          </div>
        ) : (
          <p className="text-red tracking-wide text-center ">
            {collectionName} is currently not available.
          </p>
        )}
        {/* items Container */}
      </div>
    </>
  );
}

export default Products;
