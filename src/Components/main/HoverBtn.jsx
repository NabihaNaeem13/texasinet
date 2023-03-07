import React from "react";
import { useNavigate } from "react-router-dom";

const HoverBtn = () => {
  const Navigate = useNavigate();

  const Movetoservice = () => {
    let path = "/services";
    Navigate(path);
  };
  const newtab = (url) => {
    window.open(url);
  };
  return (
    <div className="row">
      <button
        className="hoverbtn one col-md-2 offset-4 mb-3"
        onClick={Movetoservice}
      >
        Our Services
      </button>
      <button
        className="hoverbtn two col-md-2 mx-md-5 mb-3"
        onClick={() => newtab("https://calendly.com/joset")}
      >
        Get Started
      </button>
    </div>
  );
};
export default HoverBtn;