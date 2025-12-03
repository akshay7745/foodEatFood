import RestaurantCard from "./RestaurantCard";
import { restaurants } from "../utils/mockData";
import { useEffect, useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(restaurants);
  const fetchRestaurants = async () => {
    try {
      const res = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.27060&lng=85.83340&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const resDataJson = await res.json();
      const fetchedResData =
        resDataJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setResData(fetchedResData);
    } catch (error) {
      console.warn(
        "Something went wrong while fetching restaurant data.",
        error,
        error.message
      );
    }
  };
  useEffect(() => {
    fetchRestaurants();
  }, []);
  return (
    <main className="body-container">
      <div
        className="filter"
        onClick={() => {
          const filteredResData = resData.filter((res) => {
            console.log(res.info.avgRating);
            return res.info.avgRating > 4.2;
          });
          setResData(filteredResData);
        }}
      >
        Top rated restaurants
      </div>
      <div className="restaurantContainer">
        {resData.map((restaurant) => {
          const { info, cta, widgetId } = restaurant;

          return (
            <RestaurantCard key={info?.id} data={{ ...info, cta, widgetId }} />
          );
        })}
      </div>
    </main>
  );
};

export default Body;
