import React, { Component } from "react";
import events from "../../../utils/events.json";
import "./EventInfos.scss";
import { Link } from "react-router-dom";

class EventInfos extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let event = events.find(r => r.id === id);
    if (!event) {
      return <div>Oops, there is no event {this.props.match.params.id}</div>;
    }
    return (
      <div className="RestaurantInfos">
        <div className="RestaurantInfos__image">
          <img src={event.image} alt="" />
        </div>
        <div class="Home3__wrapper" key={id}>
          <div class="RestaurantInfos__col">
            <br />
            <h1 className="RestaurantInfos__h1">{event.titleInfos}</h1>
            <br />
            <h2 className="RestaurantInfos__h2">{event.details1}</h2>
            <br />
          </div>
          <div class="RestaurantInfos__col">
            <br />
            <h4 className="RestaurantInfos__h4">{event.titleInfos2}</h4>
            <br />
            <h2 className="RestaurantInfos__h2">{event.details2}</h2>
            <br />
          </div>
        </div>
        <div className="RestaurantInfos__container">
          <h1 className="RestaurantInfos__h1">Information & Bookings</h1>
          <br />
          <div className="">
            <p>Email: info@crown.com</p>
            <p>Phone:+33 1 19 28 09 05</p>
          </div>
        </div>
      </div>
    );
  }
}

export default EventInfos;
