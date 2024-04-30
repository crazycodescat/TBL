import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (email, password) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_BASE_API_URL}${
          import.meta.env.VITE_SIGNUP_URL
        }`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const json = await response.json();

      if (!response.ok) {
        return { err: json.error };
      }

      //save the user
      localStorage.setItem("user", JSON.stringify(json));

      login(json);
      navigate("/");
    } catch (error) {
      throw new Error(`Request Couldn't fetch`);
    }
  };

  return signup;
};

export default useSignup;
