import { PiGreaterThanBold, PiLessThanBold } from "react-icons/pi";
import FoodCard from "../../../Components/FoodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
        {items?.map((item) => (
          <FoodCard key={item?._id} item={item}></FoodCard>
        ))}
      </div>
      <div className="flex justify-center gap-5 my-5 ">
        <button className="btn font-black">
          <PiLessThanBold />
          Previous
        </button>
        <button className="btn font-black">
          Next
          <PiGreaterThanBold />
        </button>
      </div>
    </>
  );
};

export default OrderTab;
