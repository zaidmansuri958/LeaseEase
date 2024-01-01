import React from "react";
import "./Popular.css";
import data_properties from "../Assets/data";
import { Card } from "../Card/Card";
export const Popular = () => {
  return (
    <div className="popular">
    <h1>Best Properties Available</h1>
    <h5>This is the best properties among all the properties. we deal with these types of properties.<br/>These are the best in the city.his is the best properties among all the properties. we deal with these types of properties.</h5>
      <div className="popular-item">
        {data_properties.map((item, i) => {
          return (
            <Card
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              price={item.price}
              desc={item.desc}
              owner={item.owner}
              owner_img={item.owner_img}
            />
          );
        })}
      </div>
    </div>
  );
};