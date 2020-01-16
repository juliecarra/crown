import React from "react";
import "./EventItem.scss";

const EventItem = ({ event }) => {
  const { id, name, description, image } = event;

  return (
    <div className="EventItem">
      <img src={image} width="100%" height="100%" alt="" />
      <h1 style={{ fontSize: "2em" }}>{name}</h1>
      <br />

      <h2 className="EventItem__description">{description}</h2>

      <br />
      <h3>{event.size}</h3>
      <br />
      <div style={{ display: "flex", textAlign: "center" }}>
        <a className="EventItem__a" href={"/events/" + id}>
          More infos
        </a>
      </div>
    </div>
  );
};

export default EventItem;
