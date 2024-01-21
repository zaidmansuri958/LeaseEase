import { React, useState, useEffect } from "react";
import "./Popular.css";
import { Card } from "../Card/Card";
import axios from "axios"

export const Popular = () => {

  const [popularProperties, setProperties] = useState([]);

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/properties/popular");
        setProperties(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperties();
  }, []);

  return (
    <div className="popular">
    <h1>Best Properties Available</h1>
    <h5>This is the best properties among all the properties. we deal with these types of properties.<br/>These are the best in the city.his is the best properties among all the properties. we deal with these types of properties.</h5>
      <div className="popular-item">
      {popularProperties.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            propertyMedia={item.propertyMedia}
            propertyName={item.propertyName}
            name={item.name}
            rentAmount={item.rentAmount.$numberDecimal}
            desc={item.description}
            LandlordId={item.LandlordId}
            bathRooms={item.bathRooms}
            bedRooms={item.bedRooms}
            squareFootage={item.squareFootage}
            city={item.city}
            amenities={item.Amenities}
            propertyAddress={item.propertyAddress}
            depositAmount={item.depositAmount.$numberDecimal}
          />
        ))}
      </div>
    </div>
  );
};
