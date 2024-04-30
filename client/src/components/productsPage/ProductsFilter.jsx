import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/outline";

import Filter from "./Filter";
import Sort from "./Sort";

function ProductsFilter() {
  return (
    <>
      <div className="flex justify-between px-3 mt-8">
        {/* Filter */}
        <Filter />

        {/* Sort By */}
        <Sort />
      </div>
      <div className="flex flex-wrap items-center gap-2 ml-3  ">
        {/* filter chips */}
        <div className="flex gap-1 items-center text-xs bg-white w-fit justify-center py-1 px-2 rounded-full">
          <Link className="flex items-center justify-center w-[24px] h-[24px] hover:bg-inputBar rounded-full">
            <XMarkIcon className="h-3 w-3 text-gray-500" />
          </Link>
          <p>
            Color: <span className="font-medium">Black</span>
          </p>
        </div>
        <div>
          <Link className="underline text-tree_a2 hover:text-black hover:no-underline text-xs">
            Clear All
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductsFilter;
