import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/menu.jpg";
import deserImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu";
import SectionTionTitle from "../../../components/SectionTitle/SectionTitle";

import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const deserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Helmet>
        <title>Flair_Feast | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      {/* Main Cover */}
      <SectionTionTitle
        heading={"Today's Offer"}
        subHeading={"Don't Miss"}
      ></SectionTionTitle>
      {/* Offerd Menu Items */}
      <MenuCategory items={offered}></MenuCategory>

      {/* Dessert Menu Items */}
      <MenuCategory
        items={deserts}
        title="Desert"
        coverImg={deserImg}
      ></MenuCategory>
      {/* Pizza Menu Items */}
      <MenuCategory
        items={pizza}
        title="pizza"
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* Salad Menu Items */}
      <MenuCategory
        items={salad}
        title="salad"
        coverImg={saladImg}
      ></MenuCategory>
      {/* Soup Menu Items */}
      <MenuCategory items={soup} title="soup" coverImg={soupImg}></MenuCategory>
    </div>
  );
};

export default Menu;
