import React from "react";
import './Card.css'
import bedroom from "../Assets/bedroom.png"
import bathroom from "../Assets/shower.png"
import area from "../Assets/area.png"
import location from "../Assets/location.png"

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Image" />
      <div className="description">
        <p className="price">{props.price}</p>
        <p className="name">{props.name}</p>
        <div className="aminities">
          <div className="bedroom">
            <img src={bedroom} />
            <span>Bedroom</span>
          </div>
          <div className="bathroom">
            <img src={bathroom} />
            <span>Bathroom</span>
          </div>
          <div className="area">
            <img src={area} />
            <span>Area</span>
          </div>
          <div className="location">
            <img src={location} />
            <span>Location</span>
          </div>
        </div>
      </div>
      <div className="owner-profile">
        <img src={props.owner_img} />
        <p>{props.owner}</p>
      </div>
    </div>
  );
};
