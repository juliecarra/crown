import React from "react";

import "./Footer.scss";

const Footer = ({ footer }) => {
  return (
    <div className="Footer">
      <br />
      {footer.map(({ id, title, data, logo, logo2, logo3 }) => (
        <div key={id}>
          <div className="Footer__title">
            <h1>{title}</h1>
          </div>
          <br />
          <div className="Footer__data">
            <p>{data}</p>
          </div>
          <br />
          <div className="Footer__logo">
            <i className={logo}></i>
            <i className={logo2}></i>
            <i className={logo3}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

Footer.defaultProps = {
  footer: [
    { id: "01", title: "Call Us", data: " +33 1  08 19 09 28" },
    {
      id: "02",
      title: "Our Location",
      data: "228 Rue de Rivoli, 75001 Paris"
    },
    { id: "03", title: "Email Us", data: "info@crown.com" },
    {
      id: "04",
      title: "Stay Connected",
      logo: "fab fa-facebook",
      logo2: "fab fa-twitter",
      logo3: "fab fa-instagram"
    }
  ]
};
export default Footer;
