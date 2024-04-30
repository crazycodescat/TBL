import { useWindowSize } from "@uidotdev/usehooks";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import { useClickAway } from "react-use";
import {
  XMarkIcon,
  ArrowsUpDownIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Sort() {
  const [openSort, setOpenSort] = useState(false);
  const size = useWindowSize();
  const sortRef = useRef();
  useClickAway(sortRef, () => setOpenSort(false));

  const openSortFilter = (e) => {
    e.preventDefault();
    setOpenSort((prevOpen) => !prevOpen);
  };

  const handleOverflow = useCallback(() => {
    if (size.width < 1200 && openSort) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [size.width, openSort]);

  useEffect(() => {
    handleOverflow();
  });

  return (
    <>
      <div
        ref={sortRef}
        className={`lg:relative flex items-center py-2 px-2 gap-1 text-xs rounded-md border-[1px] ${
          openSort && "lg:border-b-[0px] lg:rounded-b-none"
        } border-solid border-Rating bg-white`}
      >
        <ArrowsUpDownIcon className="h-4 w-4 text-gray-500" />
        <p className="font-medium text-sm">Sort by:</p>
        <button onClick={openSortFilter} className="flex items-center gap-2">
          <p className="text-base">Alphabetically, A-Z</p>
          <motion.div animate={{ rotate: openSort ? 180 : 0 }}>
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          </motion.div>
        </button>
        <AnimatePresence>
          {openSort && (
            <motion.div
              variants={sortSlider}
              initial={{
                opacity: 0,
                // y: `${size.width >= 1200 ? 0 : 300}`,
                height: 0,
              }}
              animate="open"
              exit="closed"
              // ref={sortRef}
              className="flex flex-col absolute left-0 bottom-0 lg:top-[40px] py-2 w-full h-[300px] bg-white text-base border-[1px] lg:border-solid border-Rating lg:rounded-b-md"
            >
              <div className="flex justify-between px-6 lg:hidden">
                <div className="flex gap-3 items-center">
                  <ArrowsUpDownIcon className="h-4 w-4 text-gray-500" />
                  <p className="font-medium text-lg">Sort by:</p>
                </div>
                <button
                  onClick={openSortFilter}
                  className="flex justify-center items-center hover:bg-tree_a1 p-3 rounded-full"
                >
                  <XMarkIcon className="h-6 w-6 text-gray-500" />
                </button>
              </div>
              <Link className="px-6 py-4 font-semibold hover:bg-ActiveTextColor">
                Alphabetically, A-Z
              </Link>
              <Link className="px-6 py-4 hover:bg-ActiveTextColor">
                Alphabetically, Z-A
              </Link>
              <Link className="px-6 py-4 hover:bg-ActiveTextColor">
                Price, Low to high
              </Link>
              <Link className="px-6 py-4 hover:bg-ActiveTextColor">
                Price, High to Low
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default Sort;

const sortSlider = {
  closed: {
    opacity: 0,
    height: 0,
  },
  open: {
    opacity: 1,
    height: 300,
    transition: {
      type: "tween",
    },
  },
};
