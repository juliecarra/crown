import React from "react";
import "./RoomItem.css";

const RoomItem = ({ room }) => {
  const { id, name, description, image, price } = room;

  return (
    <div className="RoomItem">
      <img src={image} width="100%" height="100%" alt="" />
      <h1 style={{ fontSize: "2em" }}>{name}</h1>
      <br />

      <h2 className="RoomItem__description">{description}</h2>

      <br />
      <h3>{room.size}</h3>
      <br />
      <div style={{ display: "flex", textAlign: "center" }}>
        <p className="RoomItem__p">{price}</p>
        <a className="RoomItem__a" href={"/rooms/" + id}>
          More infos
        </a>
      </div>
    </div>
  );
};

export default RoomItem;
