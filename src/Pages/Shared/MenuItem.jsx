const MenuItem = ({ item }) => {
  const { name, recipe, image, price } = item;
  return (
    <div className=" flex space-x-2">
      <img
        className=" w-[120px] rounded-tl-none rounded-tr-2xl rounded-br-2xl rounded-bl-2xl"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}--------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-400">${price}</p>
    </div>
  );
};

export default MenuItem;
