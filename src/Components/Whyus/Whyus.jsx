import React from "react";
import rent from "../Assets/rent.gif";
import contract from "../Assets/contract.gif";
import chat from "../Assets/chat.gif";
import payment from "../Assets/Payment.gif";
import "./Whyus.css";

export const Whyus = () => {
  return (
    <div className="why-us">
      <h1>What We Provide?</h1>
    <h5>This is the best properties among all the properties. we deal with these types of properties.<br/>These are the best in the city.his is the best properties among all the properties. we deal with these types of properties.</h5>
        <div className="whyus-container">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-12 rent whyus-card">
            <img src={rent} />
            <h2>Property</h2>
            <p>
              Navigate the real estate landscape effortlessly with our platform,
              designed to provide unparalleled ease in discovering the best
              properties. Our user-friendly interface
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-12 contract whyus-card">
            <img src={contract} />
            <h2>Contract</h2>
            <p>
              Navigate the real estate landscape effortlessly with our platform,
              designed to provide unparalleled ease in discovering the best
              properties. Our user-friendly interface
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-12 chat whyus-card">
            <img src={chat} />
            <h2>Communication</h2>
            <p>
              Navigate the real estate landscape effortlessly with our platform,
              designed to provide unparalleled ease in discovering the best
              properties. Our user-friendly interface
            </p>
          </div>
          <div className="col-md-3 col-lg-3 col-12 payment whyus-card">
            <img src={payment} />
            <h2>Payments</h2>
            <p>
              Navigate the real estate landscape effortlessly with our platform,
              designed to provide unparalleled ease in discovering the best
              properties. Our user-friendly interface
            </p>
          </div>
        </div>
        </div>
    </div>
  );
};
