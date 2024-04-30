import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";
import { useState, useRef } from "react";
import {
  UserCircleIcon,
  AcademicCapIcon,
  ArrowRightOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

import { useAuthContext } from "../../hooks/useAuthContext";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const [open, setOpen] = useState(false);
  useClickAway(ref, () => setOpen(false));
  const { logout } = useAuthContext();

  const toggleHandler = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const logoutHandler = () => {
    // e.preventDefault();
    localStorage.removeItem("user");
    logout();
    navigate(-1);
  };

  // Log the updated state when it changes
  // useEffect(() => {
  //   console.log("isVisible:", isVisible);
  // }, [isVisible]);

  return (
    <>
      <a
        onClick={toggleHandler}
        className="relative flex items-center hover:bg-searchBar cursor-pointer p-3 rounded-full"
      >
        <UserCircleIcon className="h-6 w-6 text-gray-500" />
      </a>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "tween" }}
            ref={ref}
            className="z-[100] drop-shadow flex flex-col absolute bg-[#fff] top-[65px] right-16 w-[194px] rounded-br-lg rounded-bl-lg lg:right-[16rem] xl:right-[20rem]"
          >
            <a
              href="#"
              className="group flex items-center gap-2 px-4 py-3 hover:text-Rating"
            >
              <UserCircleIcon className="w-5 h-5 text-[#000] group-hover:text-Rating" />
              <p className="font-normal text-sm text-[#000] group-hover:text-Rating">
                My Profile
              </p>
            </a>
            <Link
              to="/cart"
              href="#"
              className="group flex items-center gap-2 px-4 py-3 hover:text-Rating"
            >
              <ShoppingCartIcon className="w-5 h-5 text-[#000] group-hover:text-Rating" />
              <p className="font-normal text-sm text-[#000] group-hover:text-Rating">
                Cart
              </p>
            </Link>
            <a
              href="#"
              className="group flex items-center gap-2 px-4 py-3 hover:text-Rating"
            >
              <AcademicCapIcon className="w-5 h-5 text-[#000] group-hover:text-Rating" />
              <p className="font-normal text-sm text-[#000] group-hover:text-Rating">
                My Orders
              </p>
            </a>
            <a
              onClick={logoutHandler}
              href="#"
              className="group flex items-center gap-2 px-4 py-3 hover:text-Rating"
            >
              <ArrowRightOnRectangleIcon className="w-5 h-5 text-[#000] group-hover:text-Rating" />
              <p className="font-normal text-sm text-[#000] group-hover:text-Rating">
                Logout
              </p>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Profile;
