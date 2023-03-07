import React from "react";

const ServiceBottom = () => {
  return (
    <div id="service-wave">
      <h1 className="text-center service-wave-title">Here we are!</h1>
      <div className="service-wave-2">
        <div className="col-md-6 mb-4" style={{ textAlign: "center" }}>
          <img
            width="436"
            height="245"
            src="https://www.texasinet.com/wp-content/uploads/2021/08/Dallas-City-with-text-8.png"
            className="place"
            alt=""
            loading="lazy"
            srcset="https://www.texasinet.com/wp-content/uploads/2021/08/Dallas-City-with-text-8.png 436w, https://www.texasinet.com/wp-content/uploads/2021/08/Dallas-City-with-text-8-300x169.png 300w"
            sizes="(max-width: 436px) 100vw, 436px"
          />
        </div>
        <div className="col-md-6 mb-4" style={{ textAlign: "center" }}>
          <img
            width="477"
            height="245"
            src="https://www.texasinet.com/wp-content/uploads/2021/08/Fort-Worth-City-with-text-8.png"
            className="place"
            alt=""
            loading="lazy"
            srcset="https://www.texasinet.com/wp-content/uploads/2021/08/Fort-Worth-City-with-text-8.png 477w, https://www.texasinet.com/wp-content/uploads/2021/08/Fort-Worth-City-with-text-8-300x143.png 300w"
            sizes="(max-width: 477px) 100vw, 477px"
          />
        </div>
      </div>
    </div>
  );
};
export default ServiceBottom;

