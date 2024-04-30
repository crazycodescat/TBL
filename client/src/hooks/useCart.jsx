import { useCartContext } from "./useCartContext";
// import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

const useCart = () => {
  const { dispatch } = useCartContext();
  const { user } = useAuthContext();

  const cart = async (cartData) => {
    console.log(cartData);
    try {
      const response = await fetch("http://localhost:3003/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(cartData),
      });

      const json = await response.json();

      if (!response.ok) {
        console.log(response);
        return { err: json.error };
      }
      console.log(json.cart);
      dispatch({ type: "ADD_TO_CART", payload: json.cart });

      //save the user
      // localStorage.setItem("user", JSON.stringify(json));

      // login(json);
      // navigate("/");
    } catch (error) {
      throw new Error(`Request Couldn't fetch`);
    }
  };

  return cart;
};

const useGetAllCartItems = () => {
  const { dispatch } = useCartContext();
  // const navigate = useNavigate();

  const cart = async ({ userId, token }) => {
    try {
      const response = await fetch(
        "http://localhost:3003/api/cart/getCartItems",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ user: userId.toString() }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        console.log(response);
        return { err: json.error };
      }

      console.log(json.items);
      dispatch({ type: "ADD_TO_CART", payload: json });
      //save the user
      // localStorage.setItem("user", JSON.stringify(json));

      // login(json);
      // navigate("/");
    } catch (error) {
      throw new Error(`Request Couldn't fetch`);
    }
  };

  return cart;
};

export { useCart, useGetAllCartItems };
