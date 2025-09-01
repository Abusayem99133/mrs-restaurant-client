import { Helmet } from "react-helmet-async";
import Cover from "../Shareds/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import useMenu from "../../hooks/useHooks";
import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu?.filter((item) => item?.category === "dessert");
  const soup = menu?.filter((item) => item?.category === "soup");
  const salad = menu?.filter((item) => item?.category === "salad");
  const pizza = menu?.filter((item) => item?.category === "pizza");
  const offered = menu?.filter((item) => item?.category === "offered");
  const drinks = menu?.filter((item) => item?.category === "drinks");

  return (
    <div>
      <Helmet>
        <title>MRS | Our Menu</title>
      </Helmet>
      <div>
        <Cover
          img={menuImg}
          title={"our menu"}
          recipe="Discover a wide variety of delicious dishes crafted with passion, 
  freshness, and authentic flavors to satisfy every craving."
        />

        {/* main cover  */}
        <SectionTitle subHeading="Don't Miss" heading="Today's Offer" />

        {/* offered menu items  */}
        <MenuCategory items={offered} />

        {/* desserts menu items  */}
        <MenuCategory
          items={desserts}
          title="Dessert"
          img={dessertImg}
          recipe="Indulge in our delightful collection of desserts, carefully crafted to satisfy your sweet cravings. From rich chocolate delights to fruity creations, every bite is made to bring happiness to your table and end your meal with perfection.
"
        />

        {/*  pizza menu items  */}
        <MenuCategory
          items={pizza}
          title="Pizza"
          img={pizzaImg}
          recipe="Our pizzas are baked to perfection with a golden crust, layered with flavorful sauces, and topped with fresh ingredients. Whether you love classic flavors or bold new combinations, each slice is a taste of authentic comfort.

"
        />

        {/*  salad menu items  */}
        <MenuCategory
          items={salad}
          title="salad"
          img={saladImg}
          recipe="Enjoy a refreshing selection of salads prepared with fresh, seasonal produce. Crisp vegetables, vibrant flavors, and wholesome ingredients come together to create a healthy and delicious addition to your dining experience.

"
        />

        {/* soup menu items  */}
        <MenuCategory
          items={soup}
          title="Soup"
          img={soupImg}
          recipe="Warm your soul with our variety of soups, simmered with love and rich ingredients. From creamy textures to light and aromatic broths, our soups are the perfect way to start your meal with comfort and flavor.

"
        />
        {/* soup menu items  */}
        <MenuCategory
          items={drinks}
          title="Drinks"
          img={menuImg}
          recipe="Quench your thirst with our range of refreshing beverages. From chilled soft drinks to fresh juices and crafted mocktails, our drinks are the perfect companions to elevate your dining experience.

"
        />
      </div>
    </div>
  );
};

export default Menu;
