import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import DoingRight from "./DoingRight";
import { RxDotFilled } from "react-icons/rx";
import GridCol from "./GridCol";
import Lastly from "./lastly";
import Right from "./Right";
import TwoCol from "./TwoCol";
import HoverBtn from "./HoverBtn";
import Mobile from "./Mobile";

const Card = () => {
  return (
    <>
      <div className="row card-container">
        <div className="col-md-7">
          <h1 className="text-center cart-me">We Do IT better.</h1>
          <h2 className="text-center card-sub1">ALWAYS THERE TO PROTECT YOU</h2>
          <p className="text-center elementor-element-087ad86">
            We’re not just a Managed IT Services Provider. We believe that the
            best relationship come from fully inclusive IT support and services
            that have
            <br /> no hidden surprises. That’s why we deliver comprehensive IT
            Solutions,
            <br /> and why our clients love partnering with us.{" "}
          </p>
        </div>
      </div>
      <div className="row m-md-5">
        <div className="col-lg-6 col-xl-3 col-xxl-3 col-sm-3  col-md-6">
          <div className="card m-md-3">
            <div className="inner-box">
              <div className="card-front">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "20px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/CLOUD-IT-1.svg"
                    alt=""
                  />
                </span>
                <div
                  className="rt"
                  style={{ lineHeight: "8px", marginBottom: "57px" }}
                >
                  <h3 className="card-title">Cloud</h3>
                  <BsPlusCircle className="plusicon" />
                </div>
              </div>
              <div className="card-back">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "50px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/CLOUD-IT-1.svg"
                    alt=""
                  />
                </span>
                <ul className="ul">
                  <li>
                    <RxDotFilled className="dot-p" />
                    Cloud Migration Roadmap
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Cloud Implementation
                  </li>
                  <li>
                    {" "}
                    <RxDotFilled className="dot-p" />
                    Administration and Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3 col-xxl-3 col-sm-3  col-md-6">
          <div className="card m-md-3">
            <div className="inner-box">
              <div className="card-front d">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "20px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/MANAGED-IT.svg"
                    alt=""
                  />
                </span>
                <div
                  className="rt"
                  style={{ lineHeight: "8px", marginBottom: "57px" }}
                >
                  <h3 className="card-title">Monitoring</h3>
                  <BsPlusCircle className="plusicon" />
                </div>
              </div>
              <div className="card-back">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "50px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/MANAGED-IT.svg"
                    alt=""
                  />
                </span>
                <ul className="ul">
                  <li>
                    <RxDotFilled className="dot-p" />
                    Monitoring and Alerting of All Managed Devices
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Ongoing Health and Status
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Network Availability
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3 col-xxl-3 col-sm-3  col-md-6">
          <div className="card m-md-3">
            <div className="inner-box">
              <div className="card-front s">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "20px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/SECURE-IT.svg"
                    alt=""
                  />
                </span>
                <div
                  className="rt"
                  style={{ lineHeight: "8px", marginBottom: "57px" }}
                >
                  <h3 className="card-title">Security</h3>
                  <BsPlusCircle className="plusicon" />
                </div>
              </div>
              <div className="card-back">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "50px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/SECURE-IT.svg"
                    alt=""
                  />
                </span>
                <ul className="ul">
                  <li>
                    <RxDotFilled className="dot-p" />
                    Complete Endpoint Protection
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Data Loss Prevention
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Next Generation Firewall
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-xl-3 col-xxl-3 col-sm-3  col-md-6">
          <div className="card m-md-3">
            <div className="inner-box">
              <div className="card-front n">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "20px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/CONTINUITY-IT.svg"
                    alt=""
                  />
                </span>
                <div
                  className="rt"
                  style={{ lineHeight: "8px", marginBottom: "57px" }}
                >
                  <h3 className="card-title">Network Development</h3>
                  <BsPlusCircle className="plusicon" />
                </div>
              </div>
              <div className="card-back">
                <span className="pro">
                  <img
                    style={{ width: "62px", marginTop: "50px" }}
                    src="https://www.texasinet.com/wp-content/uploads/2021/08/CONTINUITY-IT.svg"
                    alt=""
                  />
                </span>
                <ul className="ul">
                  <li>
                    <RxDotFilled className="dot-p" />
                    Planning, Architecture and Engineering
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    On-Time Network Deployment
                  </li>
                  <li>
                    <RxDotFilled className="dot-p" />
                    Procurement Of Hardware and Software
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <div className="elementor-background-overlay"></div>
        <div className="background-overlay">
          <h2 className="heading-title m-3">
            We're on a mission to make IT better.
          </h2>
          <h5 id="heading">We start with your IT need-Always</h5>
        </div>
      </div>
      <TwoCol
        image="https://www.texasinet.com/wp-content/uploads/2021/07/Better-analysis-makes.png"
        para=" We are a one-stop shop for all the information technologies your
          organization depends on. We have the skills, expertise, and
          partnerships across today’s modern technologies. Our experts help
          customers access, deploy and manage the technologies that are best
          aligned with goals and budgets. We don’t believe in one-size fits all.
          We will take the time to understand your business and develop the
          solution that’s right for you."
        title="Better analysis makes certain a better technology"
      />
      <Right
        image="https://www.texasinet.com/wp-content/uploads/2021/07/Its-better-to-have-a-partner.png"
        title="It’s better to have a partner who’s in sync"
        para="When you need a reliable DFW IT partner to take care of your company’s information technology, we are here and we’re in it for the long haul. We handle every aspect of your IT infrastructure and technology, including hardware, software and website management. Our goal is to help you leverage technology to grow your business faster and more profitable."
      />
      <Mobile
        image="https://www.texasinet.com/wp-content/uploads/2021/07/Its-better-to-have-a-partner.png"
        para="When you need a reliable DFW IT partner to take care of your company’s information technology, we are here and we’re in it for the long haul. We handle every aspect of your IT infrastructure and technology, including hardware, software and website management. Our goal is to help you leverage technology to grow your business faster and more profitable."
        title="It’s better to have a partner who’s in sync"
      />
      <TwoCol
        className="mobile"
        image="	https://www.texasinet.com/wp-content/uploads/2021/07/More-expertise.png"
        para="When you need a reliable DFW IT partner to take care of your company’s information technology, we are here and we’re in it for the long haul. We handle every aspect of your IT infrastructure and technology, including hardware, software and website management. Our goal is to help you leverage technology to grow your business faster and more profitable."
        title="It’s better to have a partner who’s in sync"
      />
      <Mobile
        image="https://www.texasinet.com/wp-content/uploads/2021/07/Get-better-communication.png"
        para="You deserve an IT partner that answers the phone. Our focus is always on providing an exceptional experience for our customers. Our approach is to provide an on-time response to customer issues until they are fully resolved beyond expectations."
        title="Get better communication"
      />
      <Right
        image="https://www.texasinet.com/wp-content/uploads/2021/07/Get-better-communication.png"
        para="You deserve an IT partner that answers the phone. Our focus is always on providing an exceptional experience for our customers. Our approach is to provide an on-time response to customer issues until they are fully resolved beyond expectations."
        title="Get better communication"
      />
      <HoverBtn />
      <GridCol />
      <div className="row">
        <DoingRight />
      </div>
      <Lastly />
    </>
  );
};
export default Card;

