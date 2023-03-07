import React from "react";

const Right = (props) => {
  return (
    <div className="row m-md-4" id="small-mobile-none">
      <div className="col-md-6">
        <h1 id="bav-title">{props.title}</h1>
        <p className="elementor-element-70a0dd5">{props.para}</p>
      </div>
      <div className="col-md-6">
        <img src={props.image} alt="superman" className="img-fluid" />
      </div>
    </div>
  );
};
export default Right;