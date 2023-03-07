import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="topbar-container fixed-top">
      <div className="top-col1">
        <h5 className="title">Need IT Services in Dallas?</h5>
      </div>
      <div className="top-col">
        <a href="https://tel:+12146329685.com" className="title">
          Call Us Now! (214)-632-9685
        </a>
      </div>
      <div className="top-col border-title">
        <a
          href="https://inet.screenconnect.com"
          target="_blank"
          rel="nopener noreferrer"
          className="title"
        >
          REMOTE SUPPORT
        </a>
      </div>
      <div className="top-col" style={{ backgroundColor: "red" }}>
        <a
          href="https://calendly.com/joset"
          target="_blank"
          rel="nopener noreferrer"
          className="title"
        >
          CONTACT US
        </a>
      </div>
    </div>
  );
};

export default Navbar;

