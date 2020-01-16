import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeCarousel.scss";
const HomeCarousel = ({ ratings }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  let round = Math.round(5);
  return (
    <div className="HomeCarousel">
      <Slider {...settings}>
        {ratings.map(({ id, commentary, name, img }) => (
          <div key={id}>
            <br />
            <p>TESTIMONIAL</p>
            <br />
            <div className="HomeCarousel__stars">{"★".repeat(round)}</div>
            <div className="HomeCarousel__commentary">
              <h3>{commentary}</h3>
            </div>
            <br />
            <p>
              {name} <span> — Review from TripAdvisor</span>{" "}
            </p>
            <br />
            <div className="HomeCarousel__image">
              <img src={img} width="50px" alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

HomeCarousel.defaultProps = {
  ratings: [
    {
      id: "01",
      stars: "5",
      commentary:
        "Superb in every aspect. If you’re thinking about staying here just book now. The service is first class and without a hint of pretension. The hotel itself is literally a work of art. The rooms are of a generous size and stylishly appointed.",
      name: "Kristen Houghton",
      img: "/images/trip.png"
    },
    {
      id: "02",
      stars: "5",
      commentary:
        "Our favourite hotel, we have been staying here every time we come to the city. We love the ambience and comfort of the room, how attentive housekeeping is in making up our rooms every day and how wonderful all the staff that make up the hotel are.",
      name: "Christopher  Smith",
      img: "/images/trip.png"
    },
    {
      id: "03",
      stars: "5",
      commentary:
        "The suites are stunning. The staff is friendly, and helpful, without being pushy. The room service is delicious. The bathrooms are so gorgeous you could die. The restaurants downstairs are all delicious.",
      name: "Adrienne Banfield",
      img: "/images/trip.png"
    },
    {
      id: "04",
      stars: "5",
      commentary:
        "Amazing location, very friendly, personal and attentive staff. The rooms are very comfortable, the beds are like falling asleep in a cloud. Very large bathrooms and walk in closet. The pool is astounding as well, very luxurious feeling.",
      name: "Trey Zampino",
      img: "/images/trip.png"
    }
  ]
};

export default HomeCarousel;
