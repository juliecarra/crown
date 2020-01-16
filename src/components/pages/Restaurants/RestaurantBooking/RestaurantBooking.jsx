import React, { Component } from "react";
import restaurants from "../../../../utils/restaurants.json";

import "./RestaurantBooking.scss";
import RestaurantDate from "./RestaurantDate";
import RestaurantGuests from "./RestaurantGuests.jsx";
import Payment from "../../Booking/Payment";
import RestaurantHours from "./RestaurantHours.jsx";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

export class RestaurantBooking extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      datePicked: new Date(),
      guests: 1,
      errors: [],
      hours: "Breakfast at 08.00am"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleDatePicked = datePicked => {
    this.setState({ datePicked });
  };

  handleGuests = guests => {
    this.setState({ guests });
  };

  handleHours = hours => {
    this.setState({ hours });
  };

  //Check if  email and password are empty
  check = ({ name, email, phone }) => {
    return !email.length || !name.length || !phone.length;
  };

  //Check if the form is valid
  validateForm = () => {
    let errors = [];
    let error;
    if (this.check(this.state)) {
      error = { message: "Please fill in all fields" };
      this.setState({ errors: errors.concat(error) });
      //console.log(errors);
      return false;
    } else return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.validateForm()) {
      //alert(`table has been successfully booked `);

      confirmAlert({
        title: "THANK YOU",
        message: `${this.state.name}, your reservation for ${
          this.state.guests
        } on ${this.state.datePicked.toDateString()} for ${
          this.state.hours
        }  is confirmed.`,
        buttons: [
          {
            label: "Close",
            onClick: () => this.props.history.push("/")
          }
        ]
      });

      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  //Display error message
  handleErrors = errors =>
    errors.map((error, i) => <p key={i}>{error.message}</p>);

  render() {
    const { name, email, phone, errors } = this.state;
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let restaurant = restaurants.find(r => r.id === id);
    if (!restaurant) {
      return <div>Oops, there is no room {this.props.match.params.id}</div>;
    }

    const totalRestaurantCharges = this.state.guests * restaurant.priceBill;

    const tax = totalRestaurantCharges * 1.17;
    return (
      <div className="BookingRestaurant">
        <img src={restaurant.image} alt="" />
        <form className="Booking" onSubmit={this.handleSubmit}>
          <div class="form-group">
            <h2 class="heading">Booking & contact</h2>
            <div class="controls">
              <input
                type="text"
                id="name"
                class="floatLabel"
                name="name"
                placeholder="Name"
                value={name}
                onChange={this.handleChange}
              />
            </div>
            <div class="controls">
              <input
                type="text"
                id="email"
                class="floatLabel"
                name="email"
                placeholder="Email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
            <div class="controls">
              <input
                type="number"
                id="phone"
                class="floatLabel"
                name="phone"
                placeholder="Phone"
                value={phone}
                onChange={this.handleChange}
              />
            </div>
            {errors.length > 0 && (
              <div className="error">{this.handleErrors(errors)}</div>
            )}

            <br />
            <div class="form-group">
              <h2 class="heading">Details</h2>
              <div class="controls">
                <h3>Select Date</h3>
                <br />
                <RestaurantDate
                  datePicked={this.state.datePicked}
                  handleDatePicked={this.handleDatePicked}
                />
              </div>
            </div>
            <br />
            <div class="controls">
              <h3>Select Number Of Guests</h3>
              <br />
              <RestaurantGuests
                guests={this.state.guests}
                handleGuests={this.handleGuests}
              />
              <br />
            </div>

            <div class="controls">
              <h3>Select Time</h3>
              <br />
              <RestaurantHours
                hours={this.state.hours}
                handleHours={this.handleHours}
              />
              <br />
            </div>

            <h3>Reservation Summary</h3>
            <br />
            <div>
              <h4>Guests: {this.state.guests}</h4>
              <h4>Time: {this.state.hours}</h4>
              <h4>Restaurant Name: {restaurant.name}</h4>
              <h4>Price/person: {restaurant.priceBill} EUR </h4>
              <h4>Total: {totalRestaurantCharges} EUR </h4>
              <h4>Tax: 17%</h4>
              <h4>Amount to pay: {tax} EUR </h4>
            </div>

            <br />
            <h3 className="Booking__payment">Fill the payment informations</h3>
            <p
              className="Booking__payment"
              style={{ fontSize: "13px", color: "#2f2424" }}
            >
              (Credit Card Number: 4242 4242 4242 4242)
            </p>

            <br />
            <Payment />
            <br />
            <div className="Booking__link">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RestaurantBooking;
