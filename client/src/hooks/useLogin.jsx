import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { login } = useAuthContext();
  const navigate = useNavigate();

  const Login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3003/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

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

  return Login;
};

export default useLogin;
