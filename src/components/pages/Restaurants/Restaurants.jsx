import React from "react";
import restaurants from "../../../utils/restaurants.json";

import "./Restaurants.scss";
import RestaurantItem from "./RestaurantItem";

import bars from "../../../utils/bars.json";
import BarItem from "./Bars/BarItem";

const Restaurants = ({
  heading,
  presentation,
  description,
  title,
  subtitle,
  title2,
  subtitle2
}) => {
  return (
    <div className="Restaurants">
      <div className="Restaurants__image">
        <h1 className="h1">{heading}</h1>
      </div>
      <div className="Restaurants__presentation">
        <h2>{presentation}</h2>
        <br />
        <p>{description}</p>
        <br />
      </div>

      <div className="Restaurants__item">
        <h3>{title}</h3>
        <br />
        <p>{subtitle}</p>
        <br />
      </div>

      <div className="Restaurants__list">
        {restaurants.map(restaurant => (
          <RestaurantItem key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>

      <div className="Restaurants__item">
        <h3>{title2}</h3>
        <br />
        <p>{subtitle2}</p>
        <br />
      </div>

      <div className="Restaurants__list">
        {bars.map(bar => (
          <BarItem key={bar.id} bar={bar} />
        ))}
      </div>
    </div>
  );
};

Restaurants.defaultProps = {
  heading: "Restaurants & Bars",
  presentation: "The art of the kitchen",
  description:
    "The gastronomic passion and artistic courage of celebrated chef Gordon Ramsey underpins every dish served at Crown.",
  title: "Restaurants",
  subtitle:
    "Every kitchen at Crown is overseen by Gordon Ramsey’s team  – meaning that no matter where you are in the hotel, or what you require, your food will be wonderful.",
  title2: "Bars",
  subtitle2:
    "Your chance to experience an exceptional cocktail from the hands of our very own masterful mixologists."
};
export default Restaurants;
