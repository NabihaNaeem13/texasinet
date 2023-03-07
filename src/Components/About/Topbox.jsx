import React from "react";

const Topbox = () => {
  return (
    <div className="center-card">
      <h1 className="text-center">Next Level I.T Services</h1>
      <div className="container1">
        <div className="box">
          <div className="column">
            {/*first card */}
            <div className="image-card">
              <img
                width="362"
                height="115"
                src="https://www.texasinet.com/wp-content/uploads/2021/08/Managed-IT-Cloud-8.png"
                className="attachment-large size-large"
                alt=""
                loading="lazy"
                srcset="https://www.texasinet.com/wp-content/uploads/2021/08/Managed-IT-Cloud-8.png 362w, https://www.texasinet.com/wp-content/uploads/2021/08/Managed-IT-Cloud-8-300x95.png 300w"
                sizes="(max-width: 362px) 100vw, 362px"
              />
            </div>
            {/*second card */}
            <div className="image-card">
              <img
                width="311"
                height="134"
                src="https://www.texasinet.com/wp-content/uploads/2021/08/Business-Continuity-Cloud-8.png"
                className="attachment-large size-large"
                alt=""
                loading="lazy"
                srcset="https://www.texasinet.com/wp-content/uploads/2021/08/Business-Continuity-Cloud-8.png 311w, https://www.texasinet.com/wp-content/uploads/2021/08/Business-Continuity-Cloud-8-300x129.png 300w"
                sizes="(max-width: 311px) 100vw, 311px"
              />
            </div>
          </div>
          <div className="column">
            <img
              width="500"
              height="606"
              src="https://www.texasinet.com/wp-content/uploads/2021/08/ezgif.com-gif-maker-1-1.gif"
              className=" hand-img"
              alt=""
              loading="lazy"
            />
          </div>
          <div className="column">
            {/*first card */}
            <div className="image-card">
              <img
                width="270"
                height="114"
                src="https://www.texasinet.com/wp-content/uploads/2021/08/Cyber-Security-Cloud-8.png"
                className="size-large"
                alt=""
                loading="lazy"
              />
            </div>
            {/*second card */}
            <div className="image-card">
              <img
                width="318"
                height="109"
                src="https://www.texasinet.com/wp-content/uploads/2021/08/Cloud-Solutions-Cloud-8.png"
                className="attachment-large size-large"
                alt=""
                loading="lazy"
                srcset="https://www.texasinet.com/wp-content/uploads/2021/08/Cloud-Solutions-Cloud-8.png 318w, https://www.texasinet.com/wp-content/uploads/2021/08/Cloud-Solutions-Cloud-8-300x103.png 300w"
                sizes="(max-width: 318px) 100vw, 318px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Topbox;

