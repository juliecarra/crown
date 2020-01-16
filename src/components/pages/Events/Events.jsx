import React from "react";
import EventItem from "./EventItem";
import events from "../../../utils/events.json";
import "./Events.scss";

const Events = ({ heading, presentation, description, title, subtitle }) => {
  return (
    <div className="Events">
      <div className="Events__image">
        <h1>{heading}</h1>
      </div>
      <div className="Events__presentation">
        <h2>{presentation}</h2>
        <br />
        <p>{description}</p>
        <br />
      </div>

      <div className="Events__item">
        <h3>{title}</h3>
        <br />
        <p>{subtitle}</p>
        <br />
      </div>

      <div className="Events__list">
        {events.map(event => (
          <EventItem key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

Events.defaultProps = {
  heading: "Meetings & Events",
  presentation: "EVENTS TO REMEMBER, EXPERIENCES TO TREASURE",
  description:
    "Exclusive experiences in beautiful places, all cared for by our amazing team.",
  title: "Meetings & Events",
  subtitle:
    "Incredible venues, all ready to host your important meetings and perfect moments."
};

export default Events;
