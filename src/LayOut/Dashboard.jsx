import { Outlet, NavLink } from "react-router-dom";
import useCart from "./../hooks/useCart";
import {
  FaShoppingCart,
  FaHome,
  FaCalendar,
  FaAd,
  FaList,
  FaSearch,
} from "react-icons/fa";
import { MdRecordVoiceOver,MdOutlineManageSearch  } from "react-icons/md";
import { IoIosAddCircleOutline } from "react-icons/io";
import { TbBrandBooking } from "react-icons/tb";

const Dashboard = () => {
  const [cart] = useCart();

  // TODO: get isAdmin value from the database
  const isAdmin = true;

  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
           
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome>Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                <IoIosAddCircleOutline />Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                <MdOutlineManageSearch />Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                <TbBrandBooking />Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaList></FaList>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome>user Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/reservation">
                  <FaCalendar></FaCalendar>Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/review">
                  <FaAd></FaAd>Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaList></FaList>My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}

          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/contact">
              <MdRecordVoiceOver /> Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="p-8 flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
