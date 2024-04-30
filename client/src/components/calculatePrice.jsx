const calculatePrice = ({ mrp, discountPercentage }) => {
  return Math.floor((mrp * (100 - discountPercentage)) / 100);
};

export default calculatePrice;
