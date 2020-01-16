import React from "react";
import "./RestaurantItem.scss";

const RestaurantItem = ({ restaurant }) => {
  const { id, name, description, image, price } = restaurant;

  return (
    <div className="RestaurantItem">
      <img src={image} width="100%" height="100%" alt="" />
      <h1 className="heading" style={{ fontSize: "2em" }}>
        {name}
      </h1>
      <br />

      <h2 className="RestaurantItem__description">{description}</h2>

      <br />
      <div style={{ display: "flex", textAlign: "center" }}>
        <p className="RestaurantItem__p">{price}</p>
        <a className="RestaurantItem__a" href={"/restaurants/" + id}>
          More infos
        </a>
      </div>
    </div>
  );
};

export default RestaurantItem;
