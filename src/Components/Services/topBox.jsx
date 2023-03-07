import React from "react";
import HoverBtn from "../main/HoverBtn";
import "./service.css";
import ServiceCard from "./serviceCard";
import ServiceQuestion from "./serviceQuestion";

const TopBox = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-5">
          <h1 className="services-title mt-md-5">
            The Right
            <br /> Peace Of Mind
          </h1>
          <p className="service-para">
            We understand you require the peace of mind that comes with making
            the right investment with the right IT services company.
          </p>
        </div>
        <div className="col-md-6 offset-md-1">
          <img
            src="https://sharelinksd.com/images/proudect/MISS.gif"
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1 className="text-center services-title1">
            TexasiNet can bring your organization up to the high
            <br /> standards that larger-sized firms are held to
          </h1>
          <p className="service-para1">
            It’s not just the technology that we provide to our clients that
            makes a<br />
            difference, but our proven approach to how we build, manage and
            protect
            <br />
            our client network. We help our clients to evolve their IT
            Environments. We
            <br /> recognize that organizations are not just looking for another
            IT consulting
            <br /> company that will sell, install, fix and refresh technology
            for them, but a<br /> partner who capable of helping them to manage
            their environment.We are
            <br /> experts in each of these technology areas, combining them to
            address and
            <br /> impact our client’s business priorities.
          </p>
        </div>
      </div>
      <ServiceCard />
      <HoverBtn />
      <ServiceQuestion />
    </div>
  );
};
export default TopBox;

