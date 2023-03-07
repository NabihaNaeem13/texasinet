import React from "react";
import "./main.css";
import { Typewriter, Cursor } from "react-simple-typewriter";

const TopBox = () => {
  const text = Typewriter({
    words: [
      "Managed IT Services",
      "Everything Cloud",
      "Cybersecurity",
      "Business Continuity"
    ],
    loop: {}
  });
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6">
          <h5 className="elementor-heading-title">YOU MANAGE YOUR BUSINESS.</h5>
          <h3 className="mx-3 tect-p">WE’LL MANAGE</h3>
          <h2 className="mx-3 tech-title">THE TECHNONLOGY</h2>
          <h1 className="tect-p mx-3">BEHIND IT.</h1>
          <h1 id="cyber">
            {text}
            <Cursor />
          </h1>
        </div>
        <div className="col-md-6">
          <video
            playsinline=""
            autoplay="autoplay"
            muted="muted"
            loop="loop"
            poster="https://assets9.lottiefiles.com/render/kntbdjvz.png"
            className="w-full rounded-t-lg img-fluid fan"
          >
            <source
              type="video/mp4"
              src="https://assets1.lottiefiles.com/render/kntbdjvz.mp4"
            />
          </video>
        </div>
      </div>
    </div>
  );
};
export default TopBox;

