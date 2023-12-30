import React from "react";
import signupimg from "../Components/Assets/Signup.svg";
import "./CSS/Registration.css";

export const LandlordRegistration = () => {
  return (
    <div className="landlord-reg">
      <div className="lan-container">
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 left-side ">
            <img src={signupimg} alt="image" />
            <div className="verticle-line"></div>
          </div>
          <div className="col-md-6 col-lg-6 col-12 right-side ">
            <h1>Landlord Registration</h1>
            <hr />
            <form>
              <input type="text" placeholder="Enter First Name" />
              <input type="text" placeholder="Enter Last Name" />
              <input type="email" placeholder="Enter Email" />
              <input type="number" placeholder="Enter Phone Number" />
              <input type="text" placeholder="Enter PAN Card Number" />
              <input type="password" placeholder="Password" />
              <button type="submit">SignUp</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
