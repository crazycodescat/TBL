/* eslint-disable react/prop-types */
const Pricing = ({ mrp, discountPercentage }) => {
  const discountedPrice = Math.floor((mrp * (100 - discountPercentage)) / 100);
  const formattedMRP = mrp.toLocaleString();
  return (
    <div className="flex gap-2">
      <span className="font-semibold text-lg">&#x20B9;{discountedPrice}</span>
      <span className="text-priceOFF text-xs mt-2 line-through">
        &#x20B9;{formattedMRP}
      </span>
      <span className="text-Rating text-sm mt-2">
        {discountPercentage}% off
      </span>
    </div>
  );
};

export default Pricing;
