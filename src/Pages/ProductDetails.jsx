import React from "react";
import "./CSS/ProductDetails.css";
import { Footer } from "../Components/Footer/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Popular } from "../Components/Popular/Popular";

export const ProductDetails = () => {
  const navigate = useNavigate();
  const changeImage = (id) => {
    const img = document.getElementById(id).src;
    document.getElementById("main-img").src = img;
  };
  const location = useLocation();
  const propertyData = location.state.propertiesData;

  const goToMessage = () => {
    if (Cookies.get("uid")) {
      if (Cookies.get("user-type") === "Tenant") {
        navigate("/message", {
          state: { LandlordId: propertyData.LandlordId },
        });
      } else {
        alert("Please Register as Tenant");
      }
    } else {
      alert("Please Signup First");
    }
  };
  return (
    <>
      <div className="maindiv ">
        <div className="subdiv">
          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[0]}
              id="img1"
              alt="Image"
              onClick={() => changeImage("img1")}
            />
          </div>

          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[1]}
              id="img2"
              alt="Image"
              onClick={() => changeImage("img2")}
            />
          </div>

          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[2]}
              id="img3"
              alt="Image"
              onClick={() => changeImage("img3")}
            />
          </div>
          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[3]}
              id="img4"
              alt="Image"
              onClick={() => changeImage("img4")}
            />
          </div>

          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[4]}
              id="img5"
              alt="Image"
              onClick={() => changeImage("img5")}
            />
          </div>

          <div className="subdiv1">
            <img
              src={propertyData.propertyMedia[5]}
              id="img6"
              alt="Image"
              onClick={() => changeImage("img6")}
            />
          </div>
        </div>
        <div className="dcard mx-3">
          <img
            src={propertyData.propertyMedia[0]}
            className="card-img-top"
            id="main-img"
            alt="..."
          />
        </div>

        <div className="p-npc">
          <div className="p-name card-body">
            <h4 className="card-title">{propertyData.propertyName}</h4>
            <details>
              <summary>Location</summary>
              <p>{propertyData.propertyAddress}</p>
            </details>
          </div>

          <div className="property-numbers card-body">
            <li>
              <div className="property-price">
                <h3>{propertyData.rentAmount}</h3>
                <span>&nbsp;&#8377;</span>
              </div>
              <p>(Rent)</p>
            </li>
            <li>
              <h3>{propertyData.squareFootage} sqft</h3>
              <p>(Super Built Area)</p>
            </li>
            <li>
              <h3>{propertyData.bedRooms}</h3>
              <p>(Bedrooms)</p>
            </li>
            <li>
            <div className="property-price">
              <h3>{propertyData.depositAmount}</h3>
              <span>&nbsp;&#8377;</span>
              </div>
              <p>(Deposit amount)</p>
            </li>
          </div>
          <h5>Amenities</h5>
          <div className="amenities-details">
            {propertyData.amenities.map((item) => (
              <div className="amenities-details-item">
                {item}
              </div>
            ))}
          </div>

          <div className="p-description card-body">
            <p>{propertyData.desc}</p>
          </div>
          <div className="contact-details" onClick={goToMessage}>
            <button>Contact Landlord</button>
          </div>
        </div>
      </div>

      <div className="popular">
        <Popular />
      </div>
      <Footer />
    </>
  );
};
