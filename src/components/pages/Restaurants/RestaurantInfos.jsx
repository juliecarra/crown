import React, { Component } from "react";
import restaurants from "../../../utils/restaurants.json";
import "./RestaurantInfos.scss";

class RestaurantInfos extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) {
      return <div>Oops, there is no room {this.props.match.params.id}</div>;
    }
    return (
      <div className="RestaurantInfos">
        <div className="RestaurantInfos__image">
          <img src={restaurant.image} alt="" />
        </div>
        <div class="Home3__wrapper" key={id}>
          <div class="RestaurantInfos__col">
            <br />
            <h1 className="RestaurantInfos__h1">{restaurant.name}</h1>
            <br />
            <h2 className="RestaurantInfos__h2">{restaurant.description}</h2>
            <br />
          </div>
          <div class="RestaurantInfos__col">
            <br />
            <h4 className="RestaurantInfos__h4">Opening Hours</h4>
            <br />
            <div className="RestaurantInfos__list">
              {restaurant.openingHours.map((item, index) => (
                <ul>
                  <li key={index}>- {item}</li>
                </ul>
              ))}
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="RestaurantInfos__container">
          <h1 className="RestaurantInfos__h1">Book A Table</h1>
          <br />
          <div className="Home4__link">
            <a href={"/restaurants/" + id + "/booking"}>Make a reservation</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantInfos;
