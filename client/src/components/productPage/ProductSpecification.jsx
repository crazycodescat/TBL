/* eslint-disable react/prop-types */
const ProductSpecification = ({ attributes }) => {
  return (
    <div className="flex flex-col">
      <p className="py-4 font-semibold">Product Specifications</p>
      {Object.entries(attributes).map(([key, value]) => (
        <div key={key} className="flex">
          <div className="pl-4 pr-2 py-4 shrink-0 bg-searchBar w-[150px]">
            <p className="text-sm leading-tight">{key}</p>
          </div>
          <div className="pl-4 py-4 w-full">
            <p className="text-sm">{value}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecification;
