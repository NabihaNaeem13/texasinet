import React from "react";

const DoingRight = () => {
  return (
    <div className="col p-md-5">
      <h1 className="text-center" id="doingtitle">
        Doing the Right Thing
      </h1>
      <p className="text-center">
        <img
          width="709"
          height="549"
          src="https://www.texasinet.com/wp-content/uploads/2021/07/Doing-the-Right-Thing.png"
          id="doingimg"
          alt=""
          loading="lazy"
          srcset="https://www.texasinet.com/wp-content/uploads/2021/07/Doing-the-Right-Thing.png 709w, https://www.texasinet.com/wp-content/uploads/2021/07/Doing-the-Right-Thing-300x232.png 300w"
          sizes="(max-width: 709px) 100vw, 709px"
        />
      </p>
      <p className="text-center elementor-element-087ad86">
        We are always going to do the right thing. It’s not always easy, it’s
        sometimes expensive, and at times it’s an <br /> exercise in personal
        humility. However, we will always do the right thing for our customers
        and our partners.
        <br /> Our goal is to be your trusted technology adviser for life.
      </p>
    </div>
  );
};
export default DoingRight;

