import React from "react";
import spas from "../../../utils/spas.json";
import SpaItem from "./SpaItem";
import "./Spas.scss";

const Spas = ({ heading, presentation, description }) => {
  return (
    <div className="Spas">
      <div className="Spas__image">
        <h1 className="h1">{heading}</h1>
      </div>
      <div className="Spas__presentation">
        <h2>{presentation}</h2>
        <br />
        <p>{description}</p>
        <br />
      </div>

      <div className="Spas__list">
        {spas.map(spa => (
          <SpaItem key={spa.id} spa={spa} />
        ))}
      </div>
    </div>
  );
};

Spas.defaultProps = {
  heading: "Spa & Wellness",
  presentation: "Spa and Stay",
  description:
    "Discover our Spa & Stay offers to make the most of your luxury break.",
  openingHours: "Monday to Saturday: 6.00 am - 10 pm"
};
export default Spas;
