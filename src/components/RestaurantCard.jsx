import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ data }) => {
  const {
    name,
    cloudinaryImageId,
    locality,
    costForTwo,
    cuisines,
    avgRating,
    sla,
    isOpen,
    widgetId,
  } = data;
  return (
    <div className="restaurantCard">
      <img
        className="restaurantImage"
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="restaurant image"
      />
      <div className="restaurant-info">
        <h2>{name}</h2>
        <h3>{costForTwo}</h3>
        <h4>Rating: {avgRating}</h4>
        <p>{cuisines.join(", ")}</p>
        <address>{locality}</address>
      </div>
    </div>
  );
};

export default RestaurantCard;
