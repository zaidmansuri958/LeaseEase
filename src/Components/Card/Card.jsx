import React from "react";
import './Card.css'
import bedroom from "../Assets/bedroom.png"
import bathroom from "../Assets/shower.png"
import area from "../Assets/area.png"
import location from "../Assets/location.png"
import { Link,useNavigate } from "react-router-dom";

export const Card = (props) => {
  const navigate=useNavigate()

  const goToMessage=()=>{
    navigate('/message',{state:{LandlordId:props.LandlordId}})
  }
  return (
    <div className="card">
     <Link to='/productDetails'>
      <img src={props.image} alt="Image" /></Link>
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
      {/* <Link to= '/message' LandlordId={props.LandlordId}> */}
      <div className="owner-profile" onClick={goToMessage}>
        <img src={props.owner_img} />
        <p>{props.owner}{"hii "}{props.LandlordId}</p>
      </div>
      {/* </Link> */}
  </div>
  );
};
