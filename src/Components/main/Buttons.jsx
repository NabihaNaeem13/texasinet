import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const Navigate = useNavigate();

  const Movetoservice = () => {
    let path = "/services";
    Navigate(path);
  };
  return (
    <div className="row">
      <button
        className="elementor-button1 col-md-2 offset-4 mb-3"
        onClick={Movetoservice}
      >
        Our Services
      </button>
      <a
        className="elementor-button col-md-2 mx-md-5 mb-3 text-center p-3"
        href="https://calendly.com/joset"
      >
        Get Started
      </a>
    </div>
  );
};
export default Buttons;
