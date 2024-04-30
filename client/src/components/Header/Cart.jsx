import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
// import { useEffect, useState } from "react";
// import { useCartContext } from "../../hooks/useCartContext";
// import { useAuthContext } from "../../hooks/useAuthContext";

const Cart = () => {
  // const [cartItemsQuantity, setCartItemsQuantity] = useState(0);
  // const { items } = useCartContext();
  // console.log(user);
  const user = JSON.parse(localStorage.getItem("user"));
  // useEffect(() => {
  //   if (items.length > 0) {
  //     setCartItemsQuantity(items.length);
  //   }
  // }, [items.length]);
  return (
    <>
      <Link to="/cart">
        <div className="relative flex items-center hover:bg-searchBar cursor-pointer p-3 rounded-full">
          <ShoppingCartIcon className="h-6 w-6 text-black" />
          <div className="flex items-center justify-center rounded-full absolute top-0 right-0 w-6 h-6 bg-Rating">
            <span className="text-[#fff] text-xs">{user?.cartItemsLen ?? 0}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Cart;
