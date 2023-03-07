import React from "react";
import { useNavigate } from "react-router-dom";

const Servicebtn = () => {
  const navigate = useNavigate();

  const Movetoservice = () => {
    let path = "/services";
    navigate(path);
  };
  return (
    <div className="text-center mb-5 mt-4">
      <button className="hoverbtn one" onClick={Movetoservice}>
        More on our services
      </button>
    </div>
  );
};
export default Servicebtn;
