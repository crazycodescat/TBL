import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// Components
import ImageSlider from "../../components/productPage/ImageSlider";
import ProductDetails from "../../components/productPage/ProductDetails";
import { useCartContext } from "../../hooks/useCartContext";
// import Modal from "../../components/Modal.jsx";
// const categories = [
//   {
//     _id: 1,
//     name: "True Wireless Earbuds",
//     image: "./images/51oMWaW7tKL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 2,
//     name: "Party Speakers",
//     image: "./images/717AKubfxCL._SL1300_-removebg-preview.png",
//   },
//   {
//     _id: 3,
//     name: "Power Banks",
//     image: "./images/71lVwl3q-kL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 4,
//     name: "Chargers",
//     image:
//       "./images/main_bd5a2cf3-f6ea-448e-883d-1421c4788a38_1875x-removebg-preview 1.png",
//   },
//   {
//     _id: 5,
//     name: "Smart Watches",
//     image: "./images/71IAFHkf5WL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 6,
//     name: "Mobiles",
//     image: "./images/51hqXIAVXAL 1.png",
//   },
//   {
//     _id: 7,
//     name: "Trimmers",
//     image: "./images/41-hTFEccnL 1.png",
//   },
//   {
//     _id: 8,
//     name: "Cables",
//     image: "./images/61zY-Cpy-vL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 9,
//     name: "Wired Headphones",
//     image: "./images/61JZG_RYQnL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 10,
//     name: "Mobile Covers",
//     image:
//       "./images/pride-and-glory-designer-hard-cover-for-oneplus-nord-603460-1689665577-1-removebg-preview.png",
//   },
//   {
//     _id: 11,
//     name: "Neckbands",
//     image: "./images/61aE616ZKoL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 12,
//     name: "Soundbars",
//     image: "./images/71h7eS0t2NL._SL1500_-removebg-preview.png",
//   },
//   {
//     _id: 13,
//     name: "Car Accessories",
//     image: "./images/51ijimtpWeS._SL1500_-removebg-preview.png",
//   },
// ];

function Product() {
  const product = useLoaderData();
  const [activeColor, setActiveColor] = useState("");
  const [activeSize, setActiveSize] = useState("");
  const [variation, setVariation] = useState(product.variations[0]);
  const [cartButtonName, setCartButtonName] = useState(false);
  const { items, discount, totalAmount } = useCartContext();

  const variationChangeHandler = (variationId, setColorError) => {
    console.log(items, discount, totalAmount);
    const newVariation = product.variations.find((variation) => {
      setCartButtonName(true);
      return variation.variation_Id === variationId;
    });

    const cartExists = localStorage.getItem("cartData");
    if (cartExists) {
      const parsedCartData = JSON.parse(cartExists);

      const itemExists = parsedCartData.cartItems.find((cartItem) => {
        return parseInt(cartItem.variationId) === variationId;
      });

      !itemExists ? setCartButtonName(false) : setCartButtonName(true);
    } else {
      setCartButtonName(false);
    }
    setActiveColor(newVariation.color);
    setVariation(newVariation);
    setColorError(false);
  };
  return (
    <>
      {/* product container */}
      <div className="flex flex-col bg-white">
        {/* Product images slider */}
        <ImageSlider variation={variation}></ImageSlider>

        {/* Product Details */}
        <ProductDetails
          product={product}
          variation={variation}
          variationChangeHandler={variationChangeHandler}
          activeColor={activeColor}
          activeSize={activeSize}
          setActiveSize={setActiveSize}
          cartButtonName={cartButtonName}
        />
        {/* <div>{console.log(variation)}</div> */}
      </div>
      {/* <Modal>
        <div className="bg-white p-2"></div>
      </Modal> */}
    </>
  );
}

export default Product;
