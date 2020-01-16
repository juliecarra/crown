import React from "react";
import "./Home5.scss";

const Home5 = ({ home5 }) => {
  return (
    <div>
      <div className="Home3">
        {home5.map(
          ({ id, title, subtitle, src, url, url_text, description }) => (
            <div class="Home5__wrapper" key={id}>
              <div class="Home5__col">
                <br />
                <br />
                <p>{title}</p>
                <br />
                <h1>{subtitle}</h1>
                <br />
                <div className="Home5__description">
                  <h2>{description}</h2>
                </div>
                <br />

                <div className="Home5__link">
                  <a href={url}>{url_text}</a>
                </div>
              </div>
              <div class="Home5__col">
                <img
                  src={src}
                  className="img"
                  alt=""
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

Home5.defaultProps = {
  home5: [
    {
      id: "01",
      title: "well-being",
      subtitle: "Spa & Wellness",
      src: "/images/spa.jpg",
      url: "/spa",
      url_text: "See more",
      description:
        "Caring for the mind, body and spirit is the cornerstone of Crown’s spa philosophy. Our spas go beyond simply treating the body, by offering a holistic approach to your spa experience. Combining years of knowledge, with skill and intuition in a luxurious, healing environment has made our spas some of the best in the world."
    }
  ]
};

export default Home5;
