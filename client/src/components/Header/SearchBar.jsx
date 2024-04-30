import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useClickAway } from "react-use";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import SearchItems from "./SearchItems";

const SearchBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef(null);
  useClickAway(ref, () => setIsExpanded(false));

  const handleToggle = () => {
    setValue("");
    setIsExpanded((prev) => !prev);
  };

  const searchInputHandler = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className="flex items-center hover:bg-searchBar p-3 rounded-full"
      >
        <MagnifyingGlassIcon className="w-6 h-6 text-black" />
      </button>
      {isExpanded && (
        <div
          ref={ref}
          className="lg:px-52 xl:px-64 z-[1] absolute top-0 left-0 right-0 bottom-0 w-full h-[500px] bg-[#fff]"
        >
          <div className="flex gap-4 py-2 px-4 items-center justify-between w-full">
            <motion.div
              variants={slideinputleft}
              initial="hidden"
              animate="visible"
              className="bg-inputBar flex items-center rounded-full md:w-full xl:w-[40rem]"
            >
              <button
                onClick={handleToggle}
                className="flex items-center hover:bg-searchBar p-3 rounded-full"
              >
                <motion.div
                  variants={slideToLeftVariant}
                  initial="hidden"
                  animate="visible"
                >
                  <MagnifyingGlassIcon className="w-6 h-6" />
                </motion.div>
              </button>
              <input
                className="bg-inputBar w-full outline-none"
                onChange={searchInputHandler}
              />
            </motion.div>
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, scale: [0.2, 1] }}
              transition={{ delay: 0.5, type: "spring" }}
              onClick={handleToggle}
              className="hover:text-priceOFF"
            >
              Cancel
            </motion.button>
          </div>
          <div className="flex flex-col w-300 gap-5 h-screen bg-stone-950 z-[100] px-4">
            {value && (
              <>
                <p className="text-xs text-black">
                  Top Search Result for &ldquo;
                  <a href="#" className="underline">
                    {value}
                  </a>
                  &ldquo;
                </p>
                <SearchItems />
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;

const slideToLeftVariant = {
  hidden: { opacity: 0, x: 320 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 55,
    },
  },
};

const slideinputleft = {
  hidden: { x: 50, width: 0 },
  visible: {
    width: "100%",
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      duration: 4,
    },
  },
};
