/* eslint-disable react/prop-types */
import { createContext, useEffect, useReducer } from "react";

// Create the CartContext
export const CartContext = createContext();

// Define the initial state
const initialState = {
  items: [],
  discount: 0,
  totalAmount: 0,
};

// Define the reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        items: action.payload.cartItems,
        totalAmount: action.payload.totalAmount,
        discount: action.payload.discount,
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

// Create the CartProvider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem("cartData"));
    console.log(existingCart);
    if (existingCart) {
      dispatch({ type: "ADD_TO_CART", payload: existingCart });
      return;
    }
  }, []);

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

// Create a custom hook for using the CartContext
// export const useCart = () => {
//   return useContext(CartContext);
// };
