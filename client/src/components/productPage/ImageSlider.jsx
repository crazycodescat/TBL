/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import {
  ChevronLeftIcon,
  HeartIcon,
  ShareIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline';

const ImageSlider = ({ variation }) => {
  // console.log(images);
  const [curr, setCurr] = useState(0);
  const dynamicWidth = `${Math.floor(100 / variation.images.length)}%`;
  const prevHandler = () => {
    setCurr((curr) => (curr === 0 ? variation.images.length - 1 : curr - 1));
  };
  const nextHandler = () => {
    setCurr((curr) => (curr === variation.images.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    setCurr(0);
  }, [variation.images]);

  return (
    <>
      <div className="relative overflow-hidden flex items-center justify-center w-[450px] mx-auto">
        <motion.div
          className="flex w-[450px] h-[450px]"
          initial={{ x: 0 }}
          animate={{ x: `-${curr * 100}%`, transition: { type: 'tween' } }}
        >
          {variation.images.map((image, idx) => (
            <img key={idx} src={`../../${image}`} alt={image} />
          ))}
        </motion.div>

        <div className="text-FContentCColor absolute top-[50%] w-full flex justify-between">
          <div className="flex items-center justify-center shadow-xl rounded-full bg-white">
            <button onClick={prevHandler} className="w-10 h-10">
              <ChevronLeftIcon className="w-8 mx-auto" />
            </button>
          </div>
          <div className="flex items-center justify-center shadow-xl rounded-full bg-white">
            <button onClick={nextHandler} className="w-10 h-10">
              <ChevronRightIcon className="w-8 mx-auto" />
            </button>
          </div>
        </div>

        {/* pagination */}
        <div className="absolute bottom-0 flex w-full bg-white px-2 shrink-0 gap-1 py-[6px]">
          {variation.images.map((s, i) => (
            <motion.div
              onClick={() => setCurr(i)}
              key={i}
              style={{ width: dynamicWidth }}
              className={`cursor-pointer h-2 rounded-full bg-ActiveTextColor ${
                curr === i && 'bg-Rating'
              }`}
            ></motion.div>
          ))}
        </div>
        {/* like and share button */}
        <div className="absolute top-4 right-0 flex justify-center flex-col px-2 gap-6">
          <div className="cursor-pointer rounded-full bg-HoverMenuColor p-2">
            <HeartIcon className="h-6 w-6 text-Rating stroke-2" />
          </div>
          <div className="cursor-pointer rounded-full bg-HoverMenuColor p-2">
            <ShareIcon className="h-6 w-6 text-Rating stroke-2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;
