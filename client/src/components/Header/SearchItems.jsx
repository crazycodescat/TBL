import Products from "../../assets/JBL_FLIP4_HERO_BLUE.png";

const SearchItems = () => {
  return (
    <>
      {/* Search Results */}
      <div className="flex flex-col">
        <a className="group flex items-start gap-4 hover:bg-inputBar" href="#">
          {/* image */}
          <div className="flex items-center justify-center w-20 h-20 group-hover:bg-inputBar">
            <img src={Products} alt="" className="w-20 h-20" />
          </div>
          <div className="flex flex-col gap-2 pt-2">
            <p className="text-sm font-normal	">
              JBL Flip 4, Wireless Portable Bluetooth Speaker
            </p>
            <div className="flex gap-2 items-center justify-start">
              <p>&#8377; 4,999</p>
              <p className="line-through text-priceOFF text-sm">9,999</p>
              <p>5% OFF</p>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default SearchItems;
