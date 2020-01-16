import React from "react";
import "./Home2.scss";

const Home2 = ({ greetings, heading, message, signature, role }) => {
  return (
    <div className="Home2">
      <br />
      <p>{greetings}</p>
      <br />
      <h1>{heading}</h1>
      <br />
      <div className="Home2__message">
        <h2>{message}</h2>
      </div>
      <br />
      <h3>{signature}</h3>
      <div className="Home2__role">
        <h4>{role}</h4>
      </div>
    </div>
  );
};

Home2.defaultProps = {
  greetings: "Welcome To Crown Hotel",
  heading: "A New Vision Of Luxury",
  message:
    "On behalf of all the Crown team, I would like to thank every customers for making us another year in a row, the best hotel in Paris. As you know, our main goal is to satisfy you so we hope that we will continue to reach your expectations and to see you again very sooon.",
  signature: "Antón Alfaro",
  role: "Managing Director"
};
export default Home2;
