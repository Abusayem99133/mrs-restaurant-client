import { Helmet } from "react-helmet-async";
import Cover from "../Shareds/Cover/Cover";
import menuImg from "../../assets/menu/menu-bg.jpg";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>MRS | Our Menu</title>
      </Helmet>
      <div>
        <Cover img={menuImg} title={"our menu"} />
      </div>
    </div>
  );
};

export default Menu;
