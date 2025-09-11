const FoodCard = ({ item }) => {
  const { image, price, recipe, name } = item;
  const handleAddToCart = (food) => {
    console.log(food);
  };
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} />
      </figure>
      <p className="absolute right-4  bg-slate-900 text-white mt-4 mr-4 px-4">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleAddToCart(item)}
            className="btn  btn-outline border-0 border-b-4 mt-4 bg-slate-100 hover:scale-105 border-yellow-500"
          >
            Add To Card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
