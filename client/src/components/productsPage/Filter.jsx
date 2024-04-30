import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useClickAway } from "react-use";
import {
  XMarkIcon,
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

function Filter() {
  const [open, setOpen] = useState(false);
  const [openColorFilter, setOpenColorFilter] = useState(false);
  const [openPriceFilter, setOpenPriceFilter] = useState(false);
  const [openAvailabilityFilter, setOpenAvailabilityFilter] = useState(false);
  const ref = useRef();
  const colorRef = useRef();
  const priceRef = useRef();
  const availabilityRef = useRef();
  useClickAway(ref, () => setOpen(false));
  useClickAway(colorRef, () => setOpenColorFilter(false));
  useClickAway(priceRef, () => setOpenPriceFilter(false));
  useClickAway(availabilityRef, () => setOpenAvailabilityFilter(false));

  const toggleFilter = (e) => {
    e.preventDefault();
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [open]);

  const range1Ref = useRef();
  const range2Ref = useRef();

  useEffect(() => {
    const range1 = range1Ref.current;
    const range2 = range2Ref.current;

    if (!range1 || !range2) {
      // Elements not found, exit early
      return;
    }

    const updateRange = () => {
      const min = parseInt(range1.value, 10);
      const max = parseInt(range2.value, 10);
      range1.style.setProperty("--min", min);
      range2.style.setProperty("--max", max);
    };

    range1.addEventListener("input", updateRange);
    range2.addEventListener("input", updateRange);

    updateRange();

    return () => {
      range1.removeEventListener("input", updateRange);
      range2.removeEventListener("input", updateRange);
    };
  }, [range1Ref, range2Ref]);

  return (
    <>
      <div className="flex items-center py-1 px-2 gap-1 text-xs rounded-md border-[1px] border-solid border-Rating bg-white">
        <AdjustmentsVerticalIcon className="h-4 w-4 text-gray-500" />
        <p className="font-medium text-sm">Filters by</p>
        <Link onClick={toggleFilter}>
          <ChevronDownIcon className="h-4 w-4 text-gray-500" />
        </Link>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={filterSlider}
            initial="closed"
            animate="open"
            exit="closed"
            ref={ref}
            className="flex flex-col absolute top-0 left-0 bg-white w-96 h-full"
          >
            <div className="flex justify-between p-2">
              <div className="flex items-center gap-2">
                <AdjustmentsVerticalIcon className="h-6 w-6 text-gray-500" />
                <p className="font-medium text-lg">Filters By</p>
              </div>
              <button
                onClick={toggleFilter}
                className="flex justify-center items-center hover:bg-tree_a1 p-3 rounded-full"
              >
                <XMarkIcon className="h-6 w-6 text-gray-500" />
              </button>
            </div>
            <div className="flex">
              <div className="flex flex-col text-sm w-[250px] bg-inputBar h-screen">
                <button
                  href="#"
                  className={`flex hover:bg-ActiveTextColor px-3 p-3 ${
                    openColorFilter && "border-l-[5px] border-Rating"
                  }`}
                  onClick={() => setOpenColorFilter(true)}
                >
                  Color
                </button>
                <button
                  href="#"
                  className={`flex hover:bg-ActiveTextColor px-3 p-3 ${
                    openPriceFilter && "border-l-[5px] border-Rating"
                  }`}
                  onClick={() => setOpenPriceFilter(true)}
                >
                  Price
                </button>
                <button
                  href="#"
                  className={`flex hover:bg-ActiveTextColor px-3 p-3 ${
                    openAvailabilityFilter && "border-l-[5px] border-Rating"
                  }`}
                  onClick={() => setOpenAvailabilityFilter(true)}
                >
                  Availability
                </button>
              </div>
              <div className="w-full h-screen">
                {/* filter properties */}
                {openColorFilter && (
                  <div ref={colorRef} className="text-center">
                    {/* color */}
                    <div className="flex gap-4 py-3 px-6">
                      <input
                        className="cursor-pointer w-[14px]"
                        type="checkbox"
                      />
                      <p className="capitalize text-tree">
                        red
                        <span className="text-priceOFF ml-2">(10)</span>
                      </p>
                    </div>
                  </div>
                )}
                {openPriceFilter && (
                  <div ref={priceRef} className="text-center">
                    {/* price */}
                    <div className="relative flex gap-4 py-3 px-6">
                      <input
                        type="range"
                        className="w-full"
                        ref={range1Ref}
                        min="0"
                        max="10000"
                        defaultValue="1000"
                        step="100"
                      />
                      <input
                        type="range"
                        className="w-full"
                        ref={range2Ref}
                        min="1"
                        max="10000"
                        defaultValue="6000"
                        step="100"
                      />
                    </div>
                    <div className="flex gap-4 items-center px-4">
                      <div className="flex items-center">
                        <p className="text-sm">&#8377;</p>
                        <div className="w-full">
                          <input
                            className="no-spinners h-6 w-12 border-b-[1px] border-solid"
                            type="number"
                            defaultValue={range1Ref}
                            dir="rtl"
                          />
                        </div>
                      </div>
                      <div>to</div>
                      <div className="flex items-center">
                        <p className="text-sm">&#8377;</p>
                        <div className="w-full">
                          <input
                            className="no-spinners w-12 h-6 border-b-[1px] border-solid"
                            type="number"
                            defaultValue={range2Ref}
                            dir="rtl"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {openAvailabilityFilter && (
                  <div ref={availabilityRef} className="text-center">
                    {/* price */}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Filter;

const filterSlider = {
  closed: { opacity: 0, x: -450 },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      type: "tween",
    },
  },
};
