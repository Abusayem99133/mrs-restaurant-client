import Banner from "../Banner";
import Category from "../Category/Category";
import ChefRe from "../ChefRe/ChefRe";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRe></ChefRe>
      <Featured />
    </div>
  );
};

export default Home;
