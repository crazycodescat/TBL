import PartySpeakers from "../../components/HomePage/PartySpeakers";
import BestSellings from "../../components/HomePage/BestSellings";
import GamingLaptops from "../../components/HomePage/GamingLaptops";
import Categories from "../../components/HomePage/Categories";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-10">
        {/* <h1>HOME PAGE</h1>
        <div>Best Sellings</div> */}
        <BestSellings />
        <PartySpeakers />
        <Categories />
        <GamingLaptops />
        {/* <div>Gaming Laptops</div> */}
      </div>
    </>
  );
};

export default HomePage;
