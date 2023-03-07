import React, { useState } from "react";
import Checkbox from "./checkbox";
const ServiceQuestion = () => {
  const [num, setNum] = useState(0);

  const IncNum = () => {
    const checked = document.getElementsByClassName(".checkbox");
    if (checked) {
      setNum(num + 1);
    }
    if (!checked) {
      setNum(num - 1);
    }
  };
  const DecNum = () => {
    setNum(num - 1);
  };
  return (
    <div className="row mx-md-5 mt-4">
      <h1 id="questiontitle">
        ARE YOU AN IDEAL CLIENT?
        <br /> 8 QUESTIONS TO ASK YOURSELF, ARE YOU...
      </h1>
      <ul className="col-lg-4 col-xl-4 col-xxl-4 col-sm-4  col-md-4 mt-5">
        <Checkbox
          title="A LOCAL DFW BUSINESS"
          subtitle="Keeping it all local use our preference"
          IncNum={IncNum}
          DecNum={DecNum}
        />
        <Checkbox
          title="LOOKING TO GROW"
          subtitle="Need of technology review"
          IncNum={IncNum}
        />
        <Checkbox
          title="A LOCAL DFW BUSINESS"
          subtitle="Entering complexed technology"
          IncNum={IncNum}
        />
        <Checkbox
          title="READY TO INVEST"
          subtitle="Recognize the value of investing in technology"
          IncNum={IncNum}
        />
      </ul>
      <div className="col-lg-4 col-xl-4 col-xxl-4 col-sm-4  col-md-4 mt-md-5">
        <Checkbox
          title="SECURITY & QUALITY ORIENTED"
          subtitle="Need of reliable, and secure infrastructure"
          IncNum={IncNum}
        />
        <Checkbox
          title="OPEN TO COLLABORATION"
          subtitle="Open to change"
          IncNum={IncNum}
        />
        <Checkbox
          title="USING WELL DOCUMENTED I.T PROCESSES."
          subtitle="In any stage"
          IncNum={IncNum}
        />
        <Checkbox
          title="LOOKING FOR A PARTNER"
          subtitle="Let's have a conversation"
          IncNum={IncNum}
        />
      </div>
      <div
        className="col-lg-4 col-xl-4 col-xxl-4 col-sm-4  col-md-4"
        style={{
          marginTop: "-66px",
          backgroundImage:
            "url('https://www.texasinet.com/wp-content/uploads/2021/08/Are-you-an-ideal-client-8.png')"
        }}
      >
        <div className="jkl" style={{ marginLeft: "45px", marginTop: "454px" }}>
          <span style={{ display: "inline-flex" }}>
            <p
              id="result"
              style={{ fontSize: "65px", color: "#ff3542", fontWeight: "700" }}
            >
              {num}
            </p>
            <p
              style={{
                marginTop: "20px",
                fontSize: "45px",
                color: "#ff3542",
                fontWeight: "700"
              }}
            >
              /8
            </p>
          </span>
          <div>
            <h2
              id="fist"
              style={{ color: "#022457", lineHeight: "1", fontSize: "38.8px" }}
            >
              CHECK THE
              <br /> BOXES THAT APPLY
            </h2>
            <h2
              id="harry"
              style={{ display: "none", color: "#022457", fontSize: "39.8px" }}
            >
              {" "}
              hurry up
            </h2>
            <h2
              id="EnchTbl"
              style={{ display: "none", color: "#022457", fontSize: "35.8px" }}
            >
              {" "}
              WOW... KEEP GOING
            </h2>
            <h2
              id="khan"
              style={{ display: "none", color: "#022457", fontSize: "30.8px" }}
            >
              {" "}
              OH YESS! WE'RE SEEING A FIT!
            </h2>
            <h2
              id="bhai"
              style={{ display: "none", color: "#022457", fontSize: "34.8px" }}
            >
              {" "}
              THAT'S AMAZING! WE WANT YOU BAD!
            </h2>
          </div>
        </div>
      </div>
      <a
        href="https://calendly.com/joset"
        target="_blank"
        rel="nopener noreferrer"
        id="service-contact"
      >
        Contact Us Right Now
      </a>
    </div>
  );
};
export default ServiceQuestion;

