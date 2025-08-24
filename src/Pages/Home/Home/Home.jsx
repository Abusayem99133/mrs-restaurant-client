import Banner from "../Banner";
import Category from "../Category/Category";
import ChefRe from "../ChefRe/ChefRe";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRe></ChefRe>
      <Featured />
      <Testimonials />
    </div>
  );
};

export default Home;
