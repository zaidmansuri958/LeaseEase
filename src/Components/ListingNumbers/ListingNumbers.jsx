import React from "react";
import properties from "../Assets/properties.png";
import sellers from "../Assets/sellers.png";
import currnetly_listed from "../Assets/currently_listed.png";
import ahmedabad from "../Assets/ahmedabad.jpeg";
import delhi from "../Assets/delhi.jpeg";
import mumbai from "../Assets/mumbai.jpeg";
import pune from "../Assets/pune.jpeg";
import baglore from "../Assets/banglore.jpeg";
import "./ListingNumbers.css";
export const ListingNumbers = () => {
  return (
    <div className="listing-numbers">
      <div className="container">
        <h1>Total Listings</h1>
        <div className="row">
          <div className="col-md-6 col-lg-4 col-12">
            <img src={properties} />
            <h1>Total Listed Properties</h1>
            <h3>7000+</h3>
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <img src={currnetly_listed} />
            <h1>Currently Listed Properties</h1>
            <h3>3600+</h3>
          </div>
          <div className="col-md-6 col-lg-4 col-12">
            <img src={sellers} />
            <h1>Total Sellers</h1>
            <h3>1800+</h3>
          </div>
        </div>
        <hr />
        <div className="city">
          <div className="row">
            <div className="col-md-6 col-lg-4 col-12 item">
              <img src={ahmedabad} />
              <h1>Ahmedabad</h1>
            </div>
            <div className="col-md-6 col-lg-4 col-12 item">
              <img src={mumbai} />
              <h1>Mumbai</h1>
            </div>
            <div className="col-md-6 col-lg-4 col-12 item">
              <img src={delhi} />
              <h1>Delhi</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12 item">
              <img src={baglore} />
              <h1>Banglore</h1>
            </div>
            <div className="col-md-6 col-lg-6 col-12 item">
              <img src={pune} />
              <h1>Pune</h1>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
