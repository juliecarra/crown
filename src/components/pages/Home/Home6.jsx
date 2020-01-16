import React from "react";
import "./Home6.scss";

const Home6 = () => {
  return (
    <div className="Home6">
      <div className="Home6__wrapper">
        <div class="Home6__box packages">
          <a href="/packages">
            <h1>Packages</h1>
          </a>
          <br />
        </div>
        <div class="Home6__box services">
          <a href="/services">
            <h1>Services</h1>
          </a>
          <br />
        </div>
        <div class="Home6__box events">
          <a href="/events">
            <h1>Events</h1>
          </a>
          <br />
        </div>
      </div>
    </div>
  );
};

export default Home6;
