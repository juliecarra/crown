import React from "react";
import "./BarItem.scss";

const BarItem = ({ bar }) => {
  const { id, name, description, image, price, openingHours } = bar;

  return (
    <div className="BarItem">
      <img src={image} width="100%" height="100%" alt="" />
      <h1 className="heading" style={{ fontSize: "2em" }}>
        {name}
      </h1>
      <br />

      <h2 className="BarItem__description">{description}</h2>

      <br />

      <div style={{ display: "flex", textAlign: "center" }}>
        <p className="BarItem__p">
          {name} does not accept online reservations.
        </p>
        <p className="BarItem__a"> Opening Hours: {openingHours}</p>
      </div>
    </div>
  );
};

export default BarItem;
