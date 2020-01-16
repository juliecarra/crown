import React from "react";

import rooms from "../../../utils/rooms.json";
import RoomItem from "./RoomItem";
import "./Rooms.scss";

import suites from "../../../utils/suites.json";
import SuiteItem from "./SuiteItem";

const Rooms = ({
  heading,
  presentation,
  description,
  title,
  subtitle,
  title2,
  subtitle2
}) => {
  return (
    <div className="Rooms">
      <div className="Rooms__image">
        {/* <Hero hero="Hero--rooms" /> */}
        <h1>{heading}</h1>
      </div>
      <div className="Rooms__presentation">
        <h2>{presentation}</h2>
        <br />
        <p>{description}</p>
        <br />
      </div>

      <div className="Rooms__item">
        <h3>{title}</h3>
        <br />
        <p>{subtitle}</p>
        <br />
      </div>

      <div className="Rooms__list">
        {rooms.map(room => (
          <RoomItem key={room.id} room={room} />
        ))}
      </div>

      <div className="Rooms__item">
        <h3>{title2}</h3>
        <br />
        <p>{subtitle2}</p>
        <br />
      </div>

      <div className="Rooms__list">
        {suites.map(suite => (
          <SuiteItem key={suite.id} suite={suite} />
        ))}
      </div>
    </div>
  );
};

Rooms.defaultProps = {
  heading: "Rooms & Suites",
  presentation: "Innate style and elegance where comfort reigns",
  description:
    "The carefully crafted in furniture in every room and suite celebrates the height of French elegance with a distinctive contemporary twist.",
  title: "Rooms",
  subtitle:
    "Each room is unique in detail, but consistent in its dedication to beauty, heritage, seamless luxury and spacious bathrooms.",
  title2: "Suites",
  subtitle2:
    "Add a little more space to your stay with a living area for relaxation and large desks for concentration."
};
export default Rooms;
