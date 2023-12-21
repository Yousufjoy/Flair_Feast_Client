import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import TestiMonials from "./TestiMonials/TestiMonials";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <TestiMonials></TestiMonials>
    </>
  );
};

export default Home;
