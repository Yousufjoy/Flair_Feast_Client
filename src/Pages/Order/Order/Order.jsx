import { useState } from "react";
import orderCover from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css"; // Make sure to import the styles
import useMenu from "../../../hooks/useMenu";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = useMenu();

  const deserts = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  const salad = menu.filter((item) => item.category === "salad");

  return (
    <div>
      <Cover img={orderCover} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <p>Content for Tab 1 goes here.</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2 goes here.</p>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
