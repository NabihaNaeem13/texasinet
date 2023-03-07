import React from "react";

const Checkbox = (props) => {
  return (
    <label className="main-box fs-6" style={{ color: "red" }}>
      {props.title}
      <p className="fs-6" style={{ color: "#968f8f" }}>
        {props.subtitle}
      </p>
      <input
        type="checkbox"
        onClick={props.IncNum}
        id="checkbox"
        className="checkbox"
      />
      <span className="geekmark"></span>
    </label>
  );
};
export default Checkbox;
