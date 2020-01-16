import React from "react";
import "./Home.scss";
import Home2 from "./Home2";
import HomeCarousel from "./HomeCarousel";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
//import Home6 from "./Home6";
import Home7 from "./Home7";

const Home = ({ greetings, heading, a }) => {
  return (
    <div>
      <div className="Home">
        <div>
          <p>{greetings}</p>
          <br />
          <h1>{heading}</h1>
          <br />
          <div className="Home__link">
            <a href="/rooms">{a}</a>
          </div>
        </div>
      </div>
      <Home2 />
      {/* <Home3 />
    
    
      {/* <Home6 /> */}
      <Home3 />
      <Home4 />
      <Home5 />

      <Home7 />
      <HomeCarousel />
    </div>
  );
};

Home.defaultProps = {
  greetings: "Welcome To Crown Hotel",
  heading: "A New Vision Of Luxury",
  a: "Discover our rooms"
};
export default Home;
