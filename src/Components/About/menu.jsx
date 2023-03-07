import React from "react";
import "../Navbar/Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Menu = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-White nav-container">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="nav-logo mx-md-5"
            src="https://www.texasinet.com/wp-content/uploads/2021/07/cropped-image_2021_07_06T15_22_18_524Z-300x69.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <GiHamburgerMenu className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 h5">
            <li className="nav-item">
              <Link className="nav-link menu-link" aria-current="page" to="/">
                Welcome
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-link"
                aria-current="page"
                to="/services"
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-link active"
                aria-current="page"
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link menu-link"
                aria-current="page"
                to="/blog"
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Menu;

