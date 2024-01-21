import { React, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card } from "../Components/Card/Card";
import Cookies from "js-cookie";

export const Properties = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();
  const user_type = Cookies.get("user-type");

  const goToAdddProperties = () => {
    if (user_type == "Tenant") {
      alert("Please Register as landlord")
    }
    else{
      navigate("/add-properties");
    }
    
  };

  useEffect(() => {
    const getProperties = async () => {
      try {
        const res = await axios.get("http://localhost:5000/properties");
        setProperties(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProperties();
  }, []);
  console.log(properties);
  return (
    <div className="properties">
      <div className="popular-item">
        {properties.map((item) => (
          <Card
            key={item._id}
            id={item._id}
            propertyMedia={item.propertyMedia}
            propertyName={item.propertyName}
            propertyAddress={item.propertyAddress}
            rentAmount={item.rentAmount.$numberDecimal}
            desc={item.description}
            LandlordId={item.LandlordId}
            bathRooms={item.bathRooms}
            bedRooms={item.bedRooms}
            squareFootage={item.squareFootage}
            city={item.city}
            amenities={item.Amenities}
            depositAmount={item.depositAmount.$numberDecimal}
          />
        ))}
      </div>
      <Link to="/agreement">
        <button>Generate agreement</button>
      </Link>

      <button onClick={goToAdddProperties}>Add Properties</button>
    </div>
  );
};
