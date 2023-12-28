import React from "react";
import './Card.css'

export const Card = (props) => {
  return (
    <div className="card">
      <img src={props.image} alt="Image" />
      <div className="description">
        <p className="price">{props.price}</p>
        <p className="name">{props.name}</p>
        <p className="desc">{props.desc}</p>
      </div>
      <div className="owner-profile">
        <img src={props.owner_img} />
        <p>{props.owner}</p>
      </div>
    </div>
  );
};
