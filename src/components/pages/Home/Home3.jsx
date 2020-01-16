import React from "react";
import "./Home3.scss";

const Home3 = ({ home3 }) => {
  return (
    <div className="Home3">
      {home3.map(({ id, title, subtitle, src, url, url_text, description }) => (
        <div class="Home3__wrapper" key={id}>
          <div class="Home3__col">
            <br />

            <p>{title}</p>
            <br />
            <h1>{subtitle}</h1>
            <br />
            <div className="Home3__description">
              <h2>{description}</h2>
            </div>

            <div className="Home3__link">
              <a href={url}>{url_text}</a>
            </div>
          </div>
          <div class="Home3__col">
            <img src={src} alt="" width="100%" height="100%" />
          </div>
        </div>
      ))}
    </div>
  );
};

Home3.defaultProps = {
  home3: [
    {
      id: "01",
      title: "ACCOMMODATION",
      subtitle: "Rooms & Suites",
      src: "/images/Home3.jpg",
      url: "/rooms",
      url_text: "See our rooms",
      description:
        " A good night sleep for every one of our guests is our top priority. We’ve constructed our guest room walls with double-wide walls and high-performance windows to minimize noises from inside and outside the hotel. "
    }
  ]
};

export default Home3;
