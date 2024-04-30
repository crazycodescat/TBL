import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../hooks/useCartContext';
// import Pricing from "../../components/pricing/Pricing";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { items } = useCartContext();
  console.log(items);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    if (!cartData) {
      return;
    }
    setCart(cartData.cartItems);
  }, []);

  return (
    <div className="flex flex-col p-4 gap-6 bg-white">
      <p className="mt-12 text-4xl font-semibold">Bag</p>
      {cart.map((item, idx) => {
        return (
          <div key={idx}>
            <div className="flex gap-2 border-solid border-[1px]rounded-md">
              <div className="flex items-center w-[100px] h-[100px] shrink-0 bg-ActiveTextColor">
                <Link to={`/collections/${item.category}/${item.productId}`}>
                  <img
                    className="w-[80px] h-[80px] mx-auto"
                    src={`${item.image}`}
                    alt=""
                  />
                </Link>
              </div>
              <div className="flex flex-col gap-2 text-sm font-medium text-black">
                <Link to={`/collections/${item.category}/${item.productId}`}>
                  <h3 className="title-overflow">{item.name}</h3>
                </Link>
                <div className="flex">
                  <div className="flex flex-col gap-2 w-[120px] border-solid border-spacing-1 text-priceOFF font-semibold">
                    <span>Category:</span>
                    <span>Price:</span>
                    <span>Quantity: 2</span>

                    {item.size && <span>Size:</span>}
                    <span>Color:</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="text-Rating font-semibold">
                      {item.category}
                    </span>
                    <span className="font-semibold text-tree">
                      {item.price}
                    </span>
                    <div className="flex text-white">
                      <button className="bg-Rating w-[30px] h-[25px]">-</button>
                      <div className="w-[40px] flex justify-center items-center bg-ActiveTextColor">
                        <span className="text-black">{item.quantity}</span>
                      </div>
                      <button className="bg-Rating w-[30px] h-[25px]">+</button>
                    </div>
                    <span className="text-tree">{item?.size && item.size}</span>
                    <span className="text-tree">{item.color}</span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="text-Rating" />
          </div>
        );
      })}
      {/* Cart Summary */}
      <div className="flex flex-col">
        <p className="text-4xl font-semibold">Summary</p>
        <div className="flex flex-col gap-2 mt-10">
          <div className="flex justify-between text-tree">
            <span className="">Price (1 item)</span>
            <div className="font-semibold">1,99,998</div>
          </div>
          <div className="flex justify-between">
            <span className="text-tree">Discount</span>
            <div className="font-semibold text-Rating">-10,000</div>
          </div>
          <div className="flex justify-between">
            <span className="text-tree">Delivery Charges</span>
            <div className="font-semibold text-tree">
              <span className="line-through">80</span> Free
            </div>
          </div>
        </div>
        <hr className="text-Rating mt-5" />
        <div className="flex justify-between text-tree text-xl font-semibold mt-5">
          <span>Total Amount</span>
          <span>1,90,156</span>
        </div>
      </div>
      {/* Checkout */}
      <div>
        <motion.button
          whileHover={{
            scale: 1.02,
            transition: {
              duration: 0.2,
            },
            backgroundColor: '#026406',
          }}
          className="w-full p-4 mx-auto bg-Rating text-white font-semibold rounded-full"
        >
          Checkout
        </motion.button>
      </div>
    </div>
  );
};

export default Cart;
