import Cover from "../../Shared/Cover";
import MenuItem from "../../Shared/MenuItem";
import { Link } from "react-router-dom";
const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div className=" pt-8">
      {title && <Cover img={coverImg} title={title}></Cover>}
      <div className=" my-6 grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 mt-4 ">
          Order Your Favorite Food
        </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
