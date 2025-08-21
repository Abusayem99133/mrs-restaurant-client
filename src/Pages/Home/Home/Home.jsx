import Banner from "../Banner";
import Category from "../Category/Category";
import ChefRe from "../ChefRe/ChefRe";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <ChefRe></ChefRe>
    </div>
  );
};

export default Home;
