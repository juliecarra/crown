import React from "react";

import "./Home7.scss";

const Home7 = ({ home7 }) => {
  return (
    <div className="Home7">
      {home7.map(({ id, title, subtitle, src, url, url_text, description }) => (
        <div class="Home7__wrapper" key={id}>
          <div class="Home7__col">
            <img src={src} alt="" width="100%" height="100%" />
          </div>
          <div class="Home7__col">
            <br />
            <br />
            <p>{title}</p>
            <br />
            <h1>{subtitle}</h1>
            <br />
            <div className="Home7__description">
              <h2>{description}</h2>
            </div>
            <br />

            <div className="Home7__link">
              <a href={url}>{url_text}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Home7.defaultProps = {
  home7: [
    {
      id: "01",
      title: "Memories",
      subtitle: "Meetings & Events",
      src: "/images/Home7.jpeg",
      url: "/events",
      url_text: "See more",
      description:
        "Entertaining at the Crown is to celebrate the art of excellence. Offering your guests such a special moment is a rare privilege and you can be assured that every aspect of your occasion will rise to your expectations.."
    }
  ]
};
export default Home7;
