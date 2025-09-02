import { useParams } from "react-router-dom";
import orderCover from "../../../assets/shop/banner2.jpg";

import useMenu from "../../../hooks/useHooks";
import Cover from "../../Shareds/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";
const Order = () => {
  const [menu] = useMenu();
  const { category } = useParams();
  console.log(category);
  const desserts = menu?.filter((item) => item?.category === "dessert");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  // const offered = menu?.filter((item) => item?.category === "offered");
  const drinks = menu?.filter((item) => item?.category === "drinks");
  return (
    <div>
      <Cover
        img={orderCover}
        title={"Order Food"}
        recipe="Choose your favorite dishes from our menu and get them delivered 
  fresh and hot right to your doorstep. Enjoy a seamless ordering experience."
      />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-border">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab uppercase"
          aria-label="Salad"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <OrderTab items={salad} />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab uppercase"
          aria-label="Pizza"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <OrderTab items={pizza} />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab uppercase"
          aria-label="Soups"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <OrderTab items={soup} />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab uppercase"
          aria-label="Desserts"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <OrderTab items={desserts} />
        </div>
        <input
          type="radio"
          name="my_tabs_2"
          className="tab uppercase"
          aria-label="Drinks"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <OrderTab items={drinks} />
        </div>
      </div>
    </div>
  );
};

export default Order;
