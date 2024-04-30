import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useClickAway } from "react-use";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Bars3BottomLeftIcon } from "@heroicons/react/24/outline";
import CompanyLogo from "../../assets/icons8-tank-100.png";

const HeaderSideBar = () => {
  const [open, setOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [lessThanSevenHundred, setLessThanSevenHundred] = useState(
    window.innerWidth < 700
  );
  const ref = useRef(null);
  useClickAway(ref, () => setOpen(false));

  const updateViewportWidth = () => {
    // Use setTimeout to delay capturing the updated viewport width
    setTimeout(() => {
      setViewportWidth(window.innerWidth);
      setLessThanSevenHundred(window.innerWidth < 700);
    }, 100); // You can adjust the delay time as needed
    if (viewportWidth > 700) {
      setOpen(true);
    } else if (viewportWidth < 700) {
      setOpen(false);
    }
  };

  useEffect(() => {
    // Initial update
    updateViewportWidth();

    window.addEventListener("resize", updateViewportWidth);

    return () => window.removeEventListener("resize", updateViewportWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lessThanSevenHundred]);

  // useEffect(() => {
  //   if (open) {
  //     document.body.classList.add("overflow-hidden");
  //   } else {
  //     document.body.classList.remove("overflow-hidden");
  //   }
  // }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="p-3 hover:bg-searchBar rounded-full md:hidden"
      >
        <Bars3BottomLeftIcon className="h-6 w-6 text-black" />
      </button>
      {/* {!lessThanSevenHundred && ( */}
      <img src={CompanyLogo} alt="" className="scale-50" />
      {/* )} */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={lessThanSevenHundred && slideSideBar}
            initial="closed"
            animate="open"
            exit="closed"
            transition={{ type: "tween" }}
            ref={lessThanSevenHundred ? ref : null}
            className="absolute bg-white top-0 left-0 h-screen w-64 md:static md:h-full md:w-fit md:bg-transparent md:flex md:items-center"
            id="sideBar"
          >
            {/* CLOSE BUTTON */}
            <div className="flex flex-row-reverse items-center p-3 h-16 md:hidden">
              <button
                onClick={() => setOpen((prev) => !prev)}
                className="flex items-center justify-center p-3 hover:bg-tree_a1 rounded-full group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 stroke-cyan-500 group-hover:stroke-cyan-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col md:flex-row md:gap-5">
              <div className="group md:flex">
                <a
                  className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-sm md:text-base md:px-0 group-hover:text-Rating tracking-wider"
                  href="#"
                >
                  CATEGORIES
                  <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
                </a>
              </div>
              <div className="group md:flex">
                <a
                  className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-sm md:text-base md:px-0 group-hover:text-Rating tracking-wider"
                  href="#"
                >
                  LAPTOPS
                  <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
                </a>
              </div>
              <div className="group md:flex">
                <a
                  className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-sm md:text-base md:px-0 group-hover:text-Rating tracking-wider"
                  href="#"
                >
                  MOBILE
                  <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
                </a>
              </div>
              <div className="group md:flex">
                <a
                  className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-sm md:text-base md:px-0 group-hover:text-Rating tracking-wider"
                  href="#"
                >
                  EARBUDS
                  <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
                </a>
              </div>
              <div className="group md:flex">
                <a
                  className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-sm md:text-base md:px-0 group-hover:text-Rating tracking-wider"
                  href="#"
                >
                  SPEAKERS
                  <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeaderSideBar;

const slideSideBar = {
  closed: { x: -200, opacity: 0 },
  open: { x: 0, opacity: 1 },
};
