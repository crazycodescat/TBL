import { Link } from "react-router-dom";

import { useAuthContext } from "../../hooks/useAuthContext";
import { LockClosedIcon } from "@heroicons/react/24/outline";
import HeaderSideBar from "./HeaderSideBar";
import Profile from "./Profile";

import SearchBar from "./SearchBar";
// import Profile from "./Profile";
import Cart from "./Cart";

const Header = () => {
  const { user } = useAuthContext();

  // dispatch({ type: "LOGOUT" });
  return (
    <>
      <div className="relative flex justify-between items-center h-16 px-4 font-medium bg-white lg:px-52 xl:px-64">
        <HeaderSideBar />
        <div className="flex items-center">
          {/* Search bar */}
          <SearchBar />

          {/* Profile */}
          {user && <Profile />}

          {/* Cart Icon */}
          <Cart />

          {/* login/Signup */}
          {!user && (
            <Link to="/login">
              <div className="relative flex items-center hover:bg-searchBar cursor-pointer p-3 rounded-full">
                <LockClosedIcon className="h-6 w-6 text-gray-500" />
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
