import React from "react";
import { BsPlusLg } from "react-icons/bs";

const ServiceCardLeft = (props) => {
  return (
    <div className="row mb-4 mx-md-5">
      <div className="col-md-6">
        <img src={props.image} alt="superman" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h1 id="bav-title">{props.title}</h1>
        <h6 id="service-sub-title">{props.subtitle}</h6>
        <p className="elementor-element-70a0dd5">{props.para}</p>
        <button
          className="read-more"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#left3"
          aria-expanded="false"
          aria-controls="collapseExample"
        >
          Read More
          <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
        </button>
        <div className="collapse" id="left3">
          <ul className="text-left service-ul mt-3">
            <li>{props.point}</li>
            <li>{props.point1}</li>
            <li>{props.point2}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ServiceCardLeft;

