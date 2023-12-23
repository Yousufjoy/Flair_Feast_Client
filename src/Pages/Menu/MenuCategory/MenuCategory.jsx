import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className=" pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className=" my-6 grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
