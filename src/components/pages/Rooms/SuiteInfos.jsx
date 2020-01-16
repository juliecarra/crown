import React, { Component } from "react";
import suites from "../../../utils/suites.json";
import "./RoomInfos.scss";

class SuiteInfos extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let suite = suites.find(r => r.id === id);
    if (!suite) {
      return <div>Oops, there is no room {this.props.match.params.id}</div>;
    }
    return (
      <div className="RoomInfos">
        <div className="RoomInfos__image">
          <img src={suite.image} alt="" />
        </div>

        <div class="Home3__wrapper" key={id}>
          <div class="RoomInfos__col">
            <br />
            <h1 className="RoomInfos__h1">{suite.name}</h1>
            <br />
            <h2 className="RoomInfos__h2">{suite.description}</h2>
            <br />
          </div>
          <div class="RoomInfos__col">
            <br />
            <h4 className="RoomInfos__h4">Room features</h4>
            <br />
            <div className="RoomInfos__list">
              {suite.extras.map((item, index) => (
                <ul>
                  <li key={index}>- {item}</li>
                </ul>
              ))}
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="RoomInfos__container">
          <h1 className="RoomInfos__h1">Your Stay at Crown Hotel</h1>
          <br />
          <div className="Home4__link">
            <a href={"/rooms/suites/" + id + "/booking"}>Make a reservation</a>
          </div>
        </div>
      </div>
    );
  }
}

export default SuiteInfos;
