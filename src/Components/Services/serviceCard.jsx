import React from "react";
import { BsPlusLg } from "react-icons/bs";
import ServiceCardLeft from "./serviceCardLeft";

const ServiceCard = () => {
  return (
    <>
      <div className="row mt-5 mb-4 mx-md-5">
        <div className="col-md-6">
          <img
            src="https://www.texasinet.com/wp-content/uploads/2021/09/Cybersecurity-1.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 id="bav-title">Cybersecurity</h1>
          <h6 id="service-sub-title">
            Comprehensive Solutions To Mitigate Cybersecurity
          </h6>
          <p className="elementor-element-70a0dd5">
            Our Security Solutions makes great cyber security protection
            available to every business. We protect your business-critical and
            sensitive data 24/7 with world-class security experts and tools
            previously only available to large enterprises. All at a cost that
            fits the budgets of small and midsize organizations.
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#left"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="left">
            <ul className="text-left service-ul mt-3">
              <li>Reduce cyber security risks and vulnerabilities.</li>
              <li>Managed security services.</li>
              <li>Protect against security breaches.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-1 mb-4 mx-md-5" id="small-mobile-none">
        <div className="col-md-6">
          <h1 id="bav-title">Cloud Solutions</h1>
          <h6 id="service-sub-title">
            Take Advantage Of The Cloud To Cost Effectively Scale Your Business.
          </h6>
          <p className="elementor-element-70a0dd5">
            With us, your path to the cloud has never been easier. Whether you
            are just starting with the cloud, or are well down the road, we can
            help accelerate the benefits. Now you can save money and focus on
            your business.
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#right"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="right">
            <ul className="text-left service-ul mt-3">
              <li>Increase scalability,reliability and agility.</li>
              <li>Cloud migration and hosting</li>
              <li>Cloud backup and disaster recovery</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src=" https://www.texasinet.com/wp-content/uploads/2021/09/Cloud-Solutions-1-1.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
      </div>
      <div className="row mt-5 mb-4 mx-md-5" id="mobile-show">
        <div className="col-md-6">
          <img
            src="https://www.texasinet.com/wp-content/uploads/2021/09/Cloud-Solutions-1-1.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 id="bav-title">Cloud Solutions</h1>
          <h6 id="service-sub-title">
            Take Advantage Of The Cloud To Cost Effectively Scale Your Business.
          </h6>
          <p className="elementor-element-70a0dd5">
            With us, your path to the cloud has never been easier. Whether you
            are just starting with the cloud, or are well down the road, we can
            help accelerate the benefits. Now you can save money and focus on
            your business.
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#left"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="left">
            <ul className="text-left service-ul mt-3">
              <li>Increase scalability,reliability and agility.</li>
              <li>Cloud migration and hosting</li>
              <li>Cloud backup and disaster recovery</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-4 mx-md-5">
        <div className="col-md-6">
          <img
            src=" https://www.texasinet.com/wp-content/uploads/2021/09/managed-it-services-2.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 id="bav-title">Managed IT Services</h1>
          <h6 id="service-sub-title">
            Scalable IT Support To Take You From Where You Are To Where You Want
            To Be.
          </h6>
          <p className="elementor-element-70a0dd5">
            We provide a full range of Managed IT Services and IT Consulting
            support for small and medium sized businesses across DFW. With our
            service plan, you can enjoy the peace of mind that comes with
            knowing that your IT infrastructure is up to date, regularly
            maintained, and consistently monitored
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#left2"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="left2">
            <ul className="text-left service-ul mt-3">
              <li>Instand world-class, afforadable IT</li>
              <li>IT outsourcing for business leaders</li>
              <li>IT augmentation for IT leaders</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-5 mb-4 mx-md-5" id="mobile-show">
        <div className="col-md-6">
          <img
            src=" https://www.texasinet.com/wp-content/uploads/2021/09/Business-Continuity-Planning-3.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1 id="bav-title">Business Continuity Planning</h1>
          <h6 id="service-sub-title">
            Don’t Let A Disaster Put You Out Of Business.
          </h6>
          <p className="elementor-element-70a0dd5">
            With us, your path to the cloud has never been easier. Whether you
            are just starting with the cloud, or are well down the road, we can
            help accelerate the benefits. Now you can save money and focus on
            your business.
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#left"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="left">
            <ul className="text-left service-ul mt-3">
              <li>Business continuity and disaster recovery Planning</li>
              <li>Data backup and recovery</li>
              <li>Proactive Protection</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="row mt-1 mb-0 mx-md-5" id="small-mobile-none">
        <div className="col-md-6">
          <h1 id="bav-title">Business Continuity Planning</h1>
          <h6 id="service-sub-title">
            Don’t Let A Disaster Put You Out Of Business.
          </h6>
          <p className="elementor-element-70a0dd5">
            With us, your path to the cloud has never been easier. Whether you
            are just starting with the cloud, or are well down the road, we can
            help accelerate the benefits. Now you can save money and focus on
            your business.
          </p>
          <button
            className="read-more"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#right1"
            aria-expanded="false"
            aria-controls="collapseExample"
          >
            Read More
            <BsPlusLg style={{ float: "right", marginTop: "8px" }} />
          </button>
          <div className="collapse" id="right1">
            <ul className="text-left service-ul mt-3">
              <li>Business continuity and disaster recovery Planning</li>
              <li>Data backup and recovery</li>
              <li>Proactive Protection</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <img
            src=" https://www.texasinet.com/wp-content/uploads/2021/09/Business-Continuity-Planning-3.gif"
            alt="superman"
            className="img-fluid"
          />
        </div>
      </div>
      <ServiceCardLeft
        title="Always Expanding"
        subtitle="Customized IT Support Solutions That Fit Your Business."
        image="https://www.texasinet.com/wp-content/uploads/2021/09/95189808b18b73bf6b9b9a8373f7b22d36654d86db6525917c6ab8ed5e26b90f-3.gif"
        para="We are committed to the continued growth and development of our staff and technology. Our clients’ success is our first priority, and we are always finding new and better ways to serve them."
        point="Office Support Plans"
        point1="Unified Communications"
        point2="Custom technology roadmaps"
      />
    </>
  );
};
export default ServiceCard;