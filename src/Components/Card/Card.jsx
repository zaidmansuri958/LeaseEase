import { React, useState, useEffect } from "react";
import './Card.css'
import bedroom from "../Assets/bedroom.png"
import bathroom from "../Assets/shower.png"
import area from "../Assets/area.png"
import location from "../Assets/location.png"
import { Link,useNavigate } from "react-router-dom";
import axios from "axios"
import avatar from "../Assets/avatar.png"

export const Card = (props) => {
  const navigate=useNavigate()

  const [landlord,setLandlord]=useState([]);
  const [city,setCity]=useState([]);

  useEffect(()=>{
    const getCity=async()=>{
      try{
        const res=await axios.get("http://localhost:5000/city/"+props.city)
        console.log(res)
        setCity(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
   getCity()
  },[props.city])

  useEffect(()=>{
    const getLandlord=async()=>{
      try{
        const res=await axios.get("http://localhost:5000/landlord/"+props.LandlordId)
        setLandlord(res.data)
      }
      catch(error){
        console.log(error)
      }
    }
    getLandlord()
  },[props.LandlordId])

  const goToMessage=()=>{
    navigate('/message',{state:{LandlordId:props.LandlordId}})
  }

  const goToPropertiesDetails=()=>{
    navigate('/productDetails',{state:{propertiesData:props}})
  }
  return (
    <div className="card" onClick={goToPropertiesDetails}>
     {/* <Link to='/productDetails'> */}
      <img src={props.propertyMedia} alt="Image" />
      <div className="description">
      <div className="price">
        <p>{props.rentAmount}</p><span>&#8377;</span></div>
        <p className="name">{props.propertyName}</p>
        <div className="aminities">
          <div className="bedroom">
            <img src={bedroom} />
            <span>{props.bedRooms} Bedroom</span>
          </div>
          <div className="bathroom">
            <img src={bathroom} />
            <span>{props.bathRooms} Bathroom</span>
          </div>
          <div className="area">
            <img src={area} />
            <span>{props.squareFootage} Square Feet</span>
          </div>
          <div className="location">
            <img src={location} />
            <span>{city.city_name}</span>
          </div>
        </div>
      </div>
      {/* <Link to= '/message' LandlordId={props.LandlordId}> */}
      <div className="owner-profile" onClick={goToMessage}>
        <img src={avatar} />
        <p>{landlord.First_Name}</p>
      </div>
      {/* </Link> */}
  </div>
  );
};
