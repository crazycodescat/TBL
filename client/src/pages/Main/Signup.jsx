/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Form, Link } from "react-router-dom";
import { EyeSlashIcon, EyeIcon } from "@heroicons/react/24/outline";
import useSignup from "../../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visiblePass, setVisiblePass] = useState(false);
  const [error, setError] = useState(null);
  const signup = useSignup();

  const handlerSignup = async (e) => {
    e.preventDefault();
    setError(null);
    const err = await signup(email, password);

    if (err) {
      setError(err.err);
      return;
    }

    setEmail("");
    setPassword("");
    setError(null);
  };

  return (
    <div className="flex flex-col py-8 gap-6 max-w-[450px] rounded-[4px] p-3 mx-auto my-20 bg-white shadow-md">
      <h3 className="text-2xl font-bold">Signup</h3>
      <Form method="post" onSubmit={handlerSignup}>
        <div className="flex flex-col gap-2">
          <input
            className="border-solid placeholder-style border-[1px] border-tree_a1 py-1 px-1 rounded-[4px] outline-Rating"
            id="email"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
            autoFocus
            required
          />
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <input
            className="border-solid placeholder-style border-[1px] border-tree_a1 py-1 px-1 rounded-[4px] outline-Rating"
            id="password"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </div>
        {error && (
          <div className="mt-4">
            <span className="text-red text-xs">{error}</span>
          </div>
        )}
        <button
          className="mt-6 px-4 py-4 bg-Rating rounded-md hover:bg-ProfileTextColor text-white"
          type="submit"
        >
          Signup
        </button>
        <div className="flex pr-4 text-xs hover:underline py-2 items-center text-Rating font-semibold">
          <Link to="/login">Already have an account ?</Link>
        </div>
      </Form>
    </div>
  );
};

export default Signup;
