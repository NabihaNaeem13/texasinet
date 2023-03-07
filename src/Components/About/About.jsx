import React from "react";
import Footer from "../Footer/Footer";
import Menu from "../About/menu";
import Navbar from "../Navbar/Navbar";
import TopBox from "./Topbox";
import "./about.css";
import WhyBox from "./whyBox";
import AboutTable from "./aboutTable";
import Servicebtn from "./servicebtn";
import ServiceBottom from "../Services/serviceBottom";
import ServiceQuestion from "../Services/serviceQuestion";

const About = () => {
  return (
    <>
      <Navbar />
      <Menu />
      <div className="container-fluid">
        <div className="main">
          <TopBox />
          <WhyBox />
          <AboutTable />
          <Servicebtn />
          <ServiceQuestion />
        </div>
      </div>
      <ServiceBottom />
      <Footer />
    </>
  );
};
export default About;
