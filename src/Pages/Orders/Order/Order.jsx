import { useParams } from "react-router-dom";
import orderCover from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useHooks";
import Cover from "../../Shareds/Cover/Cover";
import OrderTab from "../OrderTab/OrderTab";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams(); // object destructure korte hobe
  const initialIndex = categories.indexOf(category);
  const [menu] = useMenu();

  const desserts = menu?.filter((item) => item?.category === "dessert");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const drinks = menu?.filter((item) => item?.category === "drinks");

  return (
    <div>
      <Cover
        img={orderCover}
        title={"Order Food"}
        recipe="Choose your favorite dishes from our menu and get them delivered 
  fresh and hot right to your doorstep. Enjoy a seamless ordering experience."
      />

      <Tabs
        defaultIndex={initialIndex}
        onSelect={(index) => console.log(index)}
      >
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
