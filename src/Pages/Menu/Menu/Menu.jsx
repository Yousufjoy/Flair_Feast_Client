import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImg from "../../../assets/menu/pizza-bg.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Flair_Feast | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
      <Cover img={menuImg} title={"Our Menu"}></Cover>
      <PopularMenu></PopularMenu>
    </div>
  );
};

export default Menu;
