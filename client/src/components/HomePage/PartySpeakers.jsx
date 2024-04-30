import { Link } from 'react-router-dom';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

import Card from '../Card/Card';
import ScrollToTopLink from '../../components/ScrollToTopLink';

const partySpeakers = [
  {
    _id: 5,
    name: 'boAt Stone 620 Bluetooth Speaker with 12W RMS Stereo Sound',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313944/TBL/images/mumzl7zvwuc1iprzlx2m.png',
    mrp: 3990,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 6,
    name: 'JBL Go 2, Wireless Portable Bluetooth Speaker with Mic, Signature Sound',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313938/TBL/images/rzgiwx9vxgv8k9xuyrgc.png',
    mrp: 2999,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 7,
    name: 'JBL Flip 5 Wireless Portable Bluetooth Speaker',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313934/TBL/images/yzcpqdblxjhzz4w2eg1r.png',
    mrp: 6999,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 8,
    name: 'JBL Pulse 5, Wireless Portable Bluetooth Speaker',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313927/TBL/images/wns2gwqz9fwz1xbm9zps.png',
    mrp: 26999,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 9,
    name: 'Bose SoundLink Flex Bluetooth Portable Speaker, Wireless Waterproof Speaker',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313923/TBL/images/fxjbxk9c2tqqio5eb3yo.jpg',
    mrp: 15900,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 10,
    name: 'boAt Stone 1800 Bluetooth Speaker with 90 W RMS Sound',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313920/TBL/images/gpndtgg9ld3ny5psjyhs.jpg',
    mrp: 21990,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
  {
    _id: 11,
    name: 'JBL Charge 5, Wireless Portable Bluetooth Speaker Pro Sound, 20 Hrs Playtime',
    image:
      'https://res.cloudinary.com/ddx7todbr/image/upload/v1714313917/TBL/images/sklkymilt6fgs6j0wgok.jpg',
    mrp: 18999,
    discountPercentage: 80,
    categoryName: 'Party Speakers',
  },
];

function PartySpeakers() {
  return (
    <Card>
      <div className="flex justify-between items-center">
        <div className="w-fit">
          <h2 className="text-xl mb-1">
            party
            <span className="font-bold text-FContentCColor"> SPEAKER</span>
          </h2>
          <hr className="border-[2px] text-Rating rounded-b-xl" />
        </div>

        <Link className="flex gap-2 group items-center text-sm font-medium hover:text-Rating">
          VIEW ALL
          <ChevronRightIcon className="h-3 w-3 stroke-[px] text-black group-hover:text-Rating" />
        </Link>
      </div>

      {/* speakers */}
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:flex lg:overflow-x-scroll invisible-scrollbar">
        {partySpeakers.map((speaker) => {
          const discountedPrice = Math.floor(
            (speaker.mrp * (100 - speaker.discountPercentage)) / 100
          );
          const formattedMRP = speaker.mrp.toLocaleString();

          return (
            <ScrollToTopLink
              classes="w-full lg:w-[250px] flex flex-col flex-shrink-0 items-center border-solid border-tree_a0 border-[1px] hover:bg-tree_a1"
              key={speaker._id}
              to={`/collections/${speaker.categoryName}/${speaker._id}`}
            >
              <div className="flex w-[170px]">
                <img src={speaker.image} alt="" />
              </div>
              <hr className="text-Rating border-[1px] w-full" />
              <div className="flex flex-col gap-2 mt-2 px-2 pb-2 text-sm font-normal">
                <span className="text-xs title-overflow">{speaker.name}</span>
                <div className="flex gap-2 text-center">
                  <span className="font-semibold text-lg	">
                    &#x20B9;{discountedPrice}
                  </span>
                  <span className="text-priceOFF text-xs mt-2 line-through">
                    &#x20B9;{formattedMRP}.00
                  </span>
                  <span className="text-Rating text-xs mt-2">
                    {speaker.discountPercentage}% off
                  </span>
                </div>
              </div>
            </ScrollToTopLink>
          );
        })}
      </div>
    </Card>
  );
}

export default PartySpeakers;
