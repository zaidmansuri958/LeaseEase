import React from "react";
import { Team } from "../Components/Team/Team";
import { Footer } from "../Components/Footer/Footer";
import { Work } from "../Components/Work/Work";
import "./CSS/AboutUs.css";
import aboutus from "../Components/Assets/aboutus.gif";

export const Aboutus = () => {
  return (
    <div className="about-us">
      <div className="about-text">
        <h1>About us</h1>
        <div className="box">
          <div className="row">
            <img src={aboutus} className="col-md-5 col-lg-5 col-12" />
            <div className="content col-md-7 col-lg-7 col-12">
              <h1>LeaseEase.</h1>
              <h2>
                Streamline property ownership with our tenant management
                expertise. As a leading company, we prioritize seamless
                landlord-tenant relationships, handling leasing, rent
                collection, and maintenance efficiently. Our innovative
                solutions ensure optimal occupancy rates, property value
                appreciation, and tenant satisfaction. Experience hassle-free
                property management with our dedicated team, committed to
                maximizing your real estate investment returns.
                Streamline property ownership with our tenant management
                expertise. As a leading company, we prioritize seamless
                landlord-tenant relationships, handling leasing, rent
                collection, and maintenance efficiently. Our innovative
                solutions ensure optimal occupancy rates, property value
                appreciation, and tenant satisfaction. Experience hassle-free
                property management with our dedicated team, committed to
                maximizing your real estate investment returns.
                Streamline property ownership with our tenant management
                expertise. As a leading company, we prioritize seamless
                landlord-tenant relationships, handling leasing, rent
                collection, and maintenance efficiently. Our innovative
                solutions ensure optimal occupancy rates, property value
                appreciation, and tenant satisfaction. Experience hassle-free
                property management with our dedicated team, committed to
                maximizing your real estate investment returns.
                
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Work />
      <Team />
      <Footer />
    </div>
  );
};
