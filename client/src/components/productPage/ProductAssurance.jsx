import {
  TruckIcon,
  ArrowUturnLeftIcon,
  ShieldCheckIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

const ProductAssurance = () => {
  return (
    <div className="flex gap-4 my-10 justify-center">
      <div className="flex gap-2 flex-col items-center w-[100px]">
        <TruckIcon className="h-6 w-6 text-Rating stroke-2" />
        <p className="text-xs leading-4 text-center">Free Delivery</p>
      </div>
      <div className="flex gap-2 flex-col items-center w-[100px]">
        <ArrowUturnLeftIcon className="h-6 w-6 text-Rating stroke-2" />
        <p className="text-xs leading-4 text-center">
          7 days replace or return
        </p>
      </div>
      <div className="flex gap-2 flex-col items-center w-[100px]">
        <ShieldCheckIcon className="h-6 w-6 text-Rating stroke-2" />
        <p className="text-xs leading-4 text-center">1 Year Warranty</p>
      </div>
      <div className="flex gap-2 flex-col items-center w-[100px]">
        <PaperAirplaneIcon className="h-6 w-6 text-Rating" />
        <p className="text-xs leading-4 text-center">Delivered by TBL.com</p>
      </div>
    </div>
  );
};

export default ProductAssurance;
