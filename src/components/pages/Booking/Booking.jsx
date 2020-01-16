import React, { Component } from "react";
import rooms from "../../../utils/rooms.json";
import "./Booking.scss";
import DateSelector from "./DateSelector.jsx";
import PeopleSelector from "./PeopleSelector.jsx";
import Payment from "./Payment.jsx";

import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css

//calculate difference between days to have number of total days
const _MS_PER_DAY = 1000 * 60 * 60 * 24;

const diffBetweenDates = (a, b) => {
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
};

class Booking extends Component {
  constructor(props) {
    super(props);

    const a = new Date();
    const b = new Date();
    b.setDate(a.getDate() + 1);

    this.state = {
      name: "",
      email: "",
      phone: "",
      street: "",
      city: "",
      zip: "",
      country: "",
      checkIn: a,
      checkOut: b,
      occupants: 1,
      roomCharge: 0,
      totalRoomCharges: 0,
      errors: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleOccupants = this.handleOccupants.bind(this);
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCheckIn = checkIn => {
    this.setState({ checkIn });
  };

  handleCheckOut = checkOut => {
    this.setState({ checkOut });
  };

  handleOccupants = occupants => {
    this.setState({ occupants });
  };
  static getDerivedStateFromProps(props, state) {
    const totalDays = diffBetweenDates(state.checkIn, state.checkOut);
    const invalidRange = totalDays <= 0 || totalDays >= 10; //cannot stay more than 10days

    return {
      totalDays,
      invalidRange
    };
  }

  //Check if  email and password are empty
  check = ({ name, email, phone, street, zip, city, country }) => {
    return (
      !email.length ||
      !name.length ||
      !phone.length ||
      !street.length ||
      !zip.length ||
      !city.length ||
      !country.length
    );
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
      confirmAlert({
        title: "THANK YOU",
        message: `${this.state.name}, your reservation for ${
          this.state.occupants
        } from ${this.state.checkIn.toDateString()} to  ${this.state.checkOut.toDateString()}
          is confirmed.`,
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
    const {
      name,
      email,
      phone,
      street,
      city,
      zip,
      country,
      errors
    } = this.state;
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let room = rooms.find(r => r.id === id);
    if (!room) {
      return <div>Oops, there is no room {this.props.match.params.id}</div>;
    }

    const totalRoomCharges = this.state.totalDays * room.priceBill;

    const tax = totalRoomCharges * 1.17;

    return (
      <div className="Booking">
        <img src={room.image} alt="" />
        <form onSubmit={this.handleSubmit}>
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
            <div class="grid">
              <div class="col-2-3">
                <div class="controls">
                  <input
                    type="text"
                    id="street"
                    class="floatLabel"
                    name="street"
                    value={street}
                    placeholder="Street"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col-1-3">
                <div class="controls">
                  <input
                    type="number"
                    id="street-number"
                    class="floatLabel"
                    name="street-number"
                    placeholder="Street Number"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div class="grid">
              <div class="col-2-3">
                <div class="controls">
                  <input
                    type="text"
                    id="city"
                    class="floatLabel"
                    name="city"
                    value={city}
                    placeholder="City"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
              <div class="col-1-3">
                <div class="controls">
                  <input
                    type="number"
                    id="zip"
                    class="floatLabel"
                    name="zip"
                    value={zip}
                    placeholder="Zip Code"
                    onChange={this.handleChange}
                  />
                </div>
              </div>
            </div>

            <div class="controls">
              <input
                type="text"
                id="country"
                class="floatLabel"
                name="country"
                placeholder="Country"
                value={country}
                onChange={this.handleChange}
              />
            </div>
          </div>
          {errors.length > 0 && (
            <div className="error">{this.handleErrors(errors)}</div>
          )}
          <br />

          <div class="form-group">
            <h2 class="heading">Details</h2>
            <div class="controls">
              <h3>Select Dates</h3>
              <br />
              <DateSelector
                checkIn={this.state.checkIn}
                checkOut={this.state.checkOut}
                totalDays={this.state.totalDays}
                invalidRange={this.state.invalidRange}
                handleCheckIn={this.handleCheckIn}
                handleCheckOut={this.handleCheckOut}
              />
            </div>
            <br />
            <div class="controls">
              <h3>Select Number Of Guests</h3>
              <br />
              <PeopleSelector
                occupants={this.state.occupants}
                handleOccupants={this.handleOccupants}
              />
              <br />
            </div>

            <h3>Reservation Summary</h3>
            <br />

            <div>
              <h4>Nights: {this.state.totalDays}</h4>
              <h4>Guests: {this.state.occupants}</h4>
              <h4>Room Name: {room.name}</h4>
              <h4>Rate/night: {room.priceBill} EUR </h4>
              <h4>Total: {totalRoomCharges} EUR </h4>
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

export default Booking;
