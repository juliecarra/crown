import React from "react";

import "./Home4.scss";

const Home4 = ({ home4 }) => {
  return (
    <div className="Home4">
      {home4.map(({ id, title, subtitle, src, url, url_text, description }) => (
        <div class="Home4__wrapper" key={id}>
          <div class="Home4__col">
            <img src={src} alt="" width="100%" height="100%" />
          </div>
          <div class="Home4__col">
            <br />
            <br />
            <p>{title}</p>
            <br />
            <h1>{subtitle}</h1>
            <br />
            <div className="Home4__description">
              <h2>{description}</h2>
            </div>
            <br />

            <div className="Home4__link">
              <a href={url}>{url_text}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home4.defaultProps = {
  home4: [
    {
      id: "01",
      title: "Gastronomic & Trendy ",
      subtitle: "Restaurants & Bars",
      src: "/images/HomeRestaurant.jpg",
      url: "/restaurants",
      url_text: "See more",
      description:
        "Under the watchful eye of executive chef Gordon Ramsey we’re proud to invite you to share in a delicious range of delights that celebrate life, encourage conviviality and warm the soul."
    }
  ]
};
export default Home4;
