import { Link } from "react-router-dom";

// eslint-disable-next-line no-unused-vars
import Pricing from "../pricing/Pricing";

/* eslint-disable react/prop-types */
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

function ProductsItems({
  product,
  images,
  discountedPrice,
  formattedMRP,
  discountPercentage,
  product_Id,
  // variation_Id,
}) {
  return (
    <div className="flex gap-2 border-[1px] border-solid border-searchBar rounded-[5px] p-2">
      <div className="flex flex-shrink-0 justify-center items-center w-[150px] p-2 ">
        {/* image */}
        <Link relative="true" to={`${product_Id}`}>
          <img className="w-[120px] lg:w-[140px]" src={`.${images}`} alt="" />
        </Link>
      </div>
      <div className="flex flex-col gap-2 text-xs">
        <Link
          relative="true"
          to={`${product_Id}`}
          className="text-xs title-overflow hover:text-Rating"
        >
          {product.name}
        </Link>
        {/* Rating */}
        <div className="flex gap-1 items-center">
          <svg
            fill="#FFA41C"
            stroke="#E88D35"
            strokeWidth=".5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            ></path>
          </svg>
          <p>4.8</p>
        </div>
        {/* pricing */}
        <div className="flex gap-2 text-center">
          <span className="font-semibold text-lg	">
            &#x20B9;{discountedPrice}
          </span>
          <span className="text-priceOFF text-xs mt-2 line-through">
            &#x20B9;{formattedMRP}
          </span>
          <span className="text-Rating text-xs mt-2">
            {discountPercentage}% off
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductsItems;
