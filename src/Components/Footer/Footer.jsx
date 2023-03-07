import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const newtab = (url) => {
    window.open(url);
  };
  return (
    <div id="footer-container">
      <div className="text-center col-md-6">
        <h1 className="text-white footer-title">
          Your business success is just one step away...
        </h1>
        <button
          onClick={() => newtab("https://calendly.com/joset")}
          id="footerbtn"
        >
          Get Started
        </button>
      </div>
      <div className="text-center">
        <img
          src="https://www.texasinet.com/wp-content/uploads/2021/07/NUC_pulse_animation.gif"
          title="NUC_pulse_animation"
          alt="NUC_pulse_animation"
          className="linebeat img-fluid"
        />
      </div>
      <div className="text-center col-md-6">
        <Link to="/">
          <img
            height="100"
            src="https://www.texasinet.com/wp-content/uploads/2021/07/Footer-Logo-2.png"
            alt="Footer Logo (2)"
          />
        </Link>
        <h5 className="text-white fs-4 bcd">
          800. W. Airport Freeway, Suite 1100, Irving, TX 75062
          help@texasinet.com
        </h5>
        <p className="text-white">
          © Copyright 2023 TexasiNet. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;

