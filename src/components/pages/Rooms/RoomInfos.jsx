import React, { Component } from "react";
import rooms from "../../../utils/rooms.json";
import "./RoomInfos.scss";

class RoomInfos extends Component {
  render() {
    const id = Number(this.props.match.params.id);
    console.log(this.props.match.params);

    let room = rooms.find(r => r.id === id);
    if (!room) {
      return <div>Oops, there is no room {this.props.match.params.id}</div>;
    }
    return (
      <div className="RoomInfos">
        <div className="RoomInfos__image">
          <img src={room.image} alt="" />
        </div>

        <div class="Home3__wrapper" key={id}>
          <div class="RoomInfos__col">
            <br />
            <h1 className="RoomInfos__h1">{room.name}</h1>
            <br />
            <h2 className="RoomInfos__h2">{room.description}</h2>
            <br />
          </div>
          <div class="RoomInfos__col">
            <br />
            <h4 className="RoomInfos__h4">Room features</h4>
            <br />
            <div className="RoomInfos__list">
              {room.extras.map((item, index) => (
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
            <a href={"/rooms/" + id + "/booking"}>Make a reservation</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RoomInfos;
