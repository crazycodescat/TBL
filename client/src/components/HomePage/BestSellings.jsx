import Card from '../Card/Card';
import ScrollToTopLink from '../../components/ScrollToTopLink'

const bestSellings = [
  {
    _id: 25,
    name: 'Samsung Galaxy M34 5G (Midnight Blue,6GB,128GB)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313872/TBL/images/knqy78jarpkerhaxefsk.jpg',
    price: 16548,
    categoryName: 'Mobiles',
  },
  {
    _id: 26,
    name: 'Samsung Galaxy M13 (Aqua Green, 6GB, 128GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313868/TBL/images/stapj8v9yhfalff2eeih.jpg',
    price: 1799,
    categoryName: 'Mobiles',
  },
  {
    _id: 27,
    name: 'Samsung Galaxy M04 Shadow Blue, 4GB RAM, 64GB Storage',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313864/TBL/images/htwbrumzsoxjn3t5gl71.jpg',
    price: 6528,
    categoryName: 'Mobiles',
  },
  {
    _id: 28,
    name: 'Samsung Galaxy S23 5G (Green, 8GB, 128GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313859/TBL/images/oyqsp6anmbbk84ozn0hb.jpg',
    price: 74999,
    categoryName: 'Mobiles',
  },
  {
    _id: 29,
    name: 'Samsung Galaxy S22 Ultra 5G (Burgundy, 12GB, 256GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313848/TBL/images/tkybeamqtgq2wrykc9iz.jpg',
    price: 84999,
    categoryName: 'Mobiles',
  },
  {
    _id: 30,
    name: 'Samsung Galaxy S21 FE 5G (2023) (8GB 256GB Navy)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313842/TBL/images/zv0b26e0qrgtuye1lwc0.jpg',
    price: 38999,
    categoryName: 'Mobiles',
  },
  {
    _id: 31,
    name: 'Samsung Galaxy A54 5G (Light Violet, 8GB, 128GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313841/TBL/images/bbgkpocr9lypbjevlyif.jpg',
    price: 37499,
    categoryName: 'Mobiles',
  },
  {
    _id: 32,
    name: 'Samsung Galaxy A34 5G (Lime, 8GB, 256GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313832/TBL/images/urohqxz1pls9tz4icnhz.jpg',
    price: 129999799,
    categoryName: 'Mobiles',
  },
  {
    _id: 33,
    name: 'Samsung Galaxy S21 FE 5G (Olive, 8GB, 128GB Storage)',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313823/TBL/images/zurrnx3f2u3j0bvtq0es.jpg',
    price: 34639,
    categoryName: 'Mobiles',
  },
];

function BestSellings() {
  return (
    <Card>
      <div className="w-fit">
        <h2 className="text-xl mb-1">
          best
          <span className="font-bold text-FContentCColor"> SELLINGS</span>
        </h2>
        <hr className="border-[2px] text-Rating rounded-b-xl" />
      </div>
      {/* best sellings */}
      <div className="flex gap-4 text-center overflow-x-scroll invisible-scrollbar">
        {bestSellings.map((mobile, i) => {
          return (
            <ScrollToTopLink
              to={`/collections/${mobile.categoryName}/${mobile._id}`}
              key={i}
              classes="flex flex-col gap-2 items-center w-[200px] h-fit p-2 border-solid border-tree_a0  border-[1px] hover:bg-tree_a1"
            >
              <div className="flex justify-center w-[200px] h-fit">
                {/* image */}
                <img
                  className="w-[100px] h-[100px]"
                  src={mobile.image}
                  alt=""
                />
              </div>
              <div className="mt-3">
                {/* details */}
                <p className="font-normal text-xs">
                  <span>{mobile.name}</span>
                </p>
                <p className="mt-3">
                  &#x20B9;<span>{mobile.price}</span>
                </p>
              </div>
            </ScrollToTopLink>
          );
        })}
      </div>
    </Card>
  );
}

export default BestSellings;
