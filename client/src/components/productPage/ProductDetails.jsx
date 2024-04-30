/* eslint-disable react/prop-types */
import { motion, useAnimate } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ShoppingCartIcon, HeartIcon } from '@heroicons/react/24/outline';
import PinCodeVerification from './PinCodeVerification';

import ProductAssurance from './ProductAssurance';
import ProductSpecification from './ProductSpecification';
import Pricing from '../pricing/Pricing';
import { useState } from 'react';

//context
import { useAuthContext } from '../../hooks/useAuthContext';

import calculatePrice from '../calculatePrice';
import { useCartContext } from '../../hooks/useCartContext';

const ProductDetails = ({
  product,
  variation,
  variationChangeHandler,
  activeColor,
  activeSize,
  setActiveSize,
  cartButtonName,
}) => {
  const [sizeError, setSizeError] = useState(false);
  const [colorError, setColorError] = useState(false);
  // const [goToCart, setGoToCart] = useState(false);
  const [sizeScope, animateColor] = useAnimate();
  const [colorScope, animateSize] = useAnimate();
  const { user } = useAuthContext();
  const { dispatch } = useCartContext();

  console.log(variation);
  const addToCartHandler = async () => {
    if (!activeColor) {
      animateColor(colorScope.current, {
        x: [1, 2, 3, 2, 1],
        transition: { duration: 0.01 },
      });
      setColorError(true);
      return;
    }
    if (variation.size && !activeSize) {
      animateSize(sizeScope.current, {
        x: [1, 2, 3, 2, 1],
        transition: { duration: 0.01 },
      });
      setSizeError(true);
      return;
    }

    const discountedPrice = calculatePrice({
      mrp: variation.mrp,
      discountPercentage: variation.discountPercentage,
    });

    const cartData = {
      user: user?.userId,
      cartItems: [],
      discount: 0,
      totalAmount: 0,
    };

    const cartItem = {
      productId: product.product_Id,
      variationId: variation.variation_Id.toString(),
      name: variation.name,
      category: product.category,
      price: discountedPrice,
      size: variation.size ? activeSize : '',
      color: activeColor,
      image: variation.images[0],
    };

    const existingCart = localStorage.getItem('cartData');
    if (!existingCart) {
      cartData.cartItems.push(cartItem);
      cartData.discount = variation.mrp - discountedPrice;
      cartData.totalAmount = discountedPrice;
      localStorage.setItem('cartData', JSON.stringify(cartData));
      dispatch({ type: 'ADD_TO_CART', payload: cartData });
      return;
    }

    const existingParsedCart = JSON.parse(existingCart);

    existingParsedCart.discount += variation.mrp - discountedPrice;
    existingParsedCart.totalAmount += cartItem.price;
    existingParsedCart.cartItems.push(cartItem);
    localStorage.setItem('cartData', JSON.stringify(existingParsedCart));
    dispatch({ type: 'ADD_TO_CART', payload: existingParsedCart });
  };

  return (
    <div className="flex flex-col gap-2 px-4 mt-6">
      <h2 className="text-md font-medium leading-snug">{variation.name}</h2>
      {/* pricing */}
      <Pricing
        mrp={variation.mrp}
        discountPercentage={variation.discountPercentage}
      />
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

      {/* choosing color */}
      <div className="flex flex-col gap-2 mt-6">
        <div className="flex gap-2">
          <span className="font-semibold">CHOOSE COLOR:</span>
          <span className="text-tree text-xs">{activeColor}</span>
        </div>
        <div id="color" ref={colorScope} className="flex gap-1">
          {product.variations.map((variation, i) => (
            <div
              onClick={() =>
                variationChangeHandler(variation.variation_Id, setColorError)
              }
              key={i}
              className={`relative flex items-center justify-center border-solid border-[1px] w-[70px] h-[70px] cursor-pointer ${
                variation.color === activeColor
                  ? 'border-Rating'
                  : colorError
                  ? 'border-red'
                  : 'border-searchBar'
              }`}
            >
              <img
                className="w-[60px] h-[60px]"
                src={variation.images[0]}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>

      {/* choosing size */}
      {variation.size && (
        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2">
            <span className="font-semibold">CHOOSE SIZE:</span>
            <span className="text-tree text-xs">{activeSize}</span>
          </div>
          <div ref={sizeScope} className="grid grid-cols-4 gap-2">
            {variation.size.map((size, i) => {
              return (
                <div
                  onClick={() => {
                    setActiveSize(size);
                    setSizeError(false);
                  }}
                  key={i}
                  className={`flex justify-center items-center border-solid border-[1px] h-[40px] cursor-pointer text-xs font-medium ${
                    size === activeSize
                      ? 'border-Rating'
                      : sizeError
                      ? 'border-red'
                      : 'border-searchBar'
                  }`}
                >
                  {size}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* pincode verification */}
      <PinCodeVerification />

      {/* Buy & Add to Cart Button */}
      <div className="flex gap-1 justify-between items-center mt-4">
        <motion.button
          whileHover={{
            scale: 1.06,
            boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
            transition: {
              type: 'spring',
              stiffness: 400,
              damping: 10,
              duration: 0.3,
            },
          }}
          whileTap={{ scale: 1, transition: { type: 'tween' } }}
          className="group hover:bg-Rating w-[70px] h-[50px] border-solid border-[2px] border-Rating"
        >
          <HeartIcon className="group-hover:stroke-white mx-auto w-7 stroke-Rating stroke-2" />
        </motion.button>
        {cartButtonName ? (
          <motion.div
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
                duration: 0.3,
              },
            }}
            whileTap={{ scale: 1, transition: { type: 'tween' } }}
          >
            <Link
              to="/cart"
              className="flex group gap-2 justify-center items-center font-semibold w-[370px] bg-Rating text-white h-[50px] border-solid border-[2px] border-Rating"
            >
              <ShoppingCartIcon className="text-white w-7" />
              GO TO CART
            </Link>
          </motion.div>
        ) : (
          <motion.button
            onClick={addToCartHandler}
            whileHover={{
              scale: 1.03,
              boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)',
              transition: {
                type: 'spring',
                stiffness: 400,
                damping: 10,
                duration: 0.3,
              },
            }}
            whileTap={{ scale: 1, transition: { type: 'tween' } }}
            className="flex group gap-2 justify-center items-center font-semibold w-[370px] bg-Rating text-white h-[50px] border-solid border-[2px] border-Rating"
          >
            <ShoppingCartIcon className="text-white w-7" />
            ADD TO CART
          </motion.button>
        )}
      </div>

      {/* product Assurance */}
      <ProductAssurance />

      {/* Technical Details */}
      <ProductSpecification attributes={variation.attributes} />
    </div>
  );
};

export default ProductDetails;
