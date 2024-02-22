import useAuth from "./../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate,useLocation } from "react-router-dom";

import useAxiosSecure from './../../hooks/useAxiosSecure';




const FoodCart = ({ item }) => {
  const { name, recipe, image, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  

  // eslint-disable-next-line no-unused-vars
  const handleAddtToCart = (food) => {
    if (user && user.email) {
      // TODO: Send cart item to database
      console.log(user.email);
      const cartItem ={
        menuID: _id,
        email: user.email,
        name,
        image,
        price
      }
      axiosSecure.post("/carts",cartItem)
      .then(res=>{
        console.log(res.data)
        if(res.data.insertedId){
          alert(`${name} has been added to your Cart!`);
        }
      })
    } else {
      Swal.fire({
        title: "You are not logged in",
        text: "Please Login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //send the user to the login page
          navigate("/login",{state:{from: location}});
        }
      });
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className=" bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
        ${price}
      </p>
      <div className="card-body flex flex-cols items-center">
        <h2 className="card-title text-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleAddtToCart(item)}
            className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
