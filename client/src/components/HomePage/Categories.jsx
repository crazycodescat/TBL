import { Link } from 'react-router-dom';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import Card from '../Card/Card';

const categories = [
  {
    _id: 1,
    name: 'True Wireless Earbuds',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313961/TBL/images/er8cb8gfjpcqgqexvemg.png',
  },
  {
    _id: 2,
    name: 'Party Speakers',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313961/TBL/images/kvs3fgisrdi4xo25mrkw.png',
  },
  {
    _id: 3,
    name: 'Power Banks',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313961/TBL/images/pmougkijzegidbzkkued.png',
  },
  {
    _id: 4,
    name: 'Chargers',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313961/TBL/images/lpq2t3kcuxl1zekl6dvt.png',
  },
  {
    _id: 5,
    name: 'Smart Watches',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313961/TBL/images/lsb3hlz9llp47j37iesp.png',
  },
  {
    _id: 6,
    name: 'Mobiles',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/ets1h0wimy7idyufjli9.png',
  },
  {
    _id: 7,
    name: 'Trimmers',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/wjmm4wnlmik5lcaahdqk.png',
  },
  {
    _id: 8,
    name: 'Cables',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/yutfuajol94lweuoi99p.png',
  },
  {
    _id: 9,
    name: 'Wired Headphones',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/s0klii8axqd4vouqovkk.png',
  },
  {
    _id: 10,
    name: 'Mobile Covers',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/hdqzetpad5tj1l4pl8nf.png',
  },
  {
    _id: 11,
    name: 'Neckbands',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313960/TBL/images/ywix3lhblyhvi1aawti8.png',
  },
  {
    _id: 12,
    name: 'Soundbars',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313959/TBL/images/ke39o8f7ttvlrmo9skhk.png',
  },
  {
    _id: 13,
    name: 'Car Accessories',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313959/TBL/images/apszoo4rfsmbag6t7tts.png',
  },
];

const Categories = () => {
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div className="w-fit">
            <h2 className="text-xl mb-1">
              shop by
              <span className="font-bold text-FContentCColor"> CATEGORIES</span>
            </h2>
            <hr className="border-[2px] text-Rating rounded-b-xl" />
          </div>

          <Link className="flex gap-2 group items-center text-sm font-medium hover:text-Rating">
            VIEW ALL
            <ChevronRightIcon className="h-3 w-3 stroke-[3px] text-black group-hover:text-Rating" />
          </Link>
        </div>
        <div className="flex overflow-x-scroll h-40 invisible-scrollbar">
          {categories.map((category) => {
            return (
              <Link
                to={`/collections/${category.name}`}
                key={category._id}
                // preventScrollReset="true"
                className="flex flex-col items-center gap-4"
              >
                <div className="">
                  <img
                    className="w-20 h-20 pointer-events-none"
                    src={category.image}
                  />
                </div>
                <div className="flex items-start h-full">
                  <p className="w-[150px] text-sm text-center font-normal leading-2">
                    {category.name}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>
    </>
  );
};

export default Categories;
