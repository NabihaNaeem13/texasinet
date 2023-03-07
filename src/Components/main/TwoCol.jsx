import React from "react";

const TwoCol = (props) => {
  return (
    <div className="row mt-4">
      <div className="col-md-6">
        <img src={props.image} alt="superman" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <h1 id="bav-title">{props.title}</h1>
        <p className="elementor-element-70a0dd5">{props.para}</p>
      </div>
    </div>
  );
};
export default TwoCol;

