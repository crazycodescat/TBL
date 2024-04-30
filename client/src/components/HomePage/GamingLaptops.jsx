import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { Link } from "react-router-dom";
import Card from "../Card/Card";

const gamingLaptops = [
  {
    _id: 1,
    name: "ASUS",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313811/TBL/images/kl1jl2awdyhix0jmznbo.png",
  },
  {
    _id: 2,
    name: "Dell Alienware",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313811/TBL/images/hpgyx0s3mgzmx8cd4xd6.png",
  },
  {
    _id: 3,
    name: "LG",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313810/TBL/images/fi29mzjmxngid0ijzoos.png",
  },
  {
    _id: 4,
    name: "MSI",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313811/TBL/images/e6mv7r9h6vbkgxgcwkre.png",
  },
  {
    _id: 6,
    name: "HP",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313809/TBL/images/zy1i2qfwzxz9s8jjweir.png",
  },
  {
    _id: 5,
    name: "Lenovo",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313810/TBL/images/rrkyy2y4zm7p9myyug69.png",
  },
  {
    _id: 7,
    name: "Acer",
    image: "https://res.cloudinary.com/ddx7todbr/image/upload/v1714313810/TBL/images/slb0lofyuvqyj5odt8iy.png",
  },
];

function GamingLaptops() {
  return (
    <>
      <Card>
        <div className="flex justify-between items-center">
          <div className="w-fit">
            <h2 className="text-xl mb-1">
              gaming
              <span className="font-bold text-FContentCColor"> LAPTOPS</span>
            </h2>
            <hr className="border-[2px] text-Rating rounded-b-xl" />
          </div>

          <Link className="flex gap-2 group items-center text-sm font-medium hover:text-Rating">
            VIEW ALL
            <ChevronRightIcon className="h-3 w-3 stroke-[px] text-black group-hover:text-Rating" />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:flex ">
          {gamingLaptops.map((laptop) => {
            return (
              <Link
                key={laptop._id}
                className="flex flex-col gap-4 p-3 items-center hover:bg-tree_a1  border-solid border-tree_a0 border-[1px]"
              >
                <div className="flex  h-[120px] justify-center text-center">
                  <img className="w-[170px]" src={laptop.image} alt="" />
                </div>
                <div className="flex w-full justify-center items-center h-[24px]">
                  <h1 className="font-normal text-sm text-center">
                    {laptop.name}
                  </h1>
                </div>
              </Link>
            );
          })}
        </div>
      </Card>
    </>
  );
}

export default GamingLaptops;
