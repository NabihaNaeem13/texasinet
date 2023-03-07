import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../Services/menu";
import Navbar from "../Navbar/Navbar";
import TopBox from "../Services/topBox";
import "./service.css";
import ServiceBottom from "./serviceBottom";

const Services = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div className="container-fluid">
        <div className="main">
          <TopBox />
        </div>
      </div>
      <ServiceBottom />
      <Footer />
    </>
  );
};
export default Services;

