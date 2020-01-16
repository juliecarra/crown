import React from "react";
import "./SpaItem.scss";

const SpaItem = ({ spa }) => {
  const { id, name, description, image, price, duration } = spa;
  return (
    <div>
      <div className="SpaItem">
        <img src={image} width="100%" height="100%" alt="" />
        <h1 className="heading" style={{ fontSize: "2em" }}>
          {name}
        </h1>
        <br />

        <h2 className="SpaItem__description">{description}</h2>

        <br />
        <h3>Duration: {duration}</h3>
        <br />
        <div style={{ display: "flex", textAlign: "center" }}>
          <p className="SpaItem__p">Price: {price}</p>
          <a className="SpaItem__a" href={"/spa/" + id + "/booking"}>
            Book A Treatment
          </a>
        </div>
      </div>
    </div>
  );
};

export default SpaItem;
