import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const SideBarItems = () => {
  return (
    <>
      <div className="group md:flex">
        <a
          className="px-4 pr-6 flex items-center justify-between text-[#000] py-3 text-xl md:text-base md:px-0 group-hover:text-Rating tracking-wider"
          href="#"
        >
          <ChevronLeftIcon className="stroke-[3] h-5 w-5 group-hover:text-ProfileTextColor md:hidden" />
          CATEGORIES
        </a>
      </div>
    </>
  );
};

export default SideBarItems;
