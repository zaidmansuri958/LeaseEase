import React from "react";
import "./Hero.css";
import image from "../Assets/building.png";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h1>
          Let's Find a Home <br></br>That's Perfect for you
        </h1>
        <h3>
          Stunning contemporary home with panoramic views, gourmet kitchen, and
          luxurious master suite. Expansive outdoor living space, private pool,
          and smart home technology. Ideal blend of elegance and functionality.
        </h3>
        <Link
          style={{ textDecoration: "none", color: "whitesmoke" }}
          to="/properties"
        >
          <button>Explore Now</button>
        </Link>
        <div className="number-details">
          <div className="pr_properties">
            <h1>9000+</h1>
            <h3>Premium Properties</h3>
          </div>
          <div className="happy_customers">
            <h1>50000+</h1>
            <h3>Happy Customers</h3>
          </div>
          <div className="award_wining">
            <h1>53 </h1>
            <h3>Award Wining</h3>
          </div>
        </div>
      </div>
      <div className="hero-right">
        <img src={image}></img>
      </div>
    </div>
  );
};
