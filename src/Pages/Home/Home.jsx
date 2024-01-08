import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Featured from "./Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import TestiMonials from "./TestiMonials/TestiMonials";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Flair_Feast | Home!!</title>
      </Helmet>
      <Banner></Banner>
      <Category></Category>
      <PopularMenu></PopularMenu>
      <Featured></Featured>
      <TestiMonials></TestiMonials>
    </>
  );
};

export default Home;
