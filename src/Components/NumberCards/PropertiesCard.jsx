import React from "react";
import "./PropertiesCard.css";
import redbg from "../Assets/redbg.png"
export default function PropertiesCard() {
  return (
    <div className="Pro_Card_Details">
    
      <div className="Pro_Card redbg">
        <div className="Pro_Card_Title">
          <span className="Pro_Card_Title_Span">Total Properties</span>
        </div>
        <div className="Pro_Card_Icon">
        <i class="fa-solid fa-building-columns"></i>
          <span className="Pro_Card_Icon_Span">10</span>
        </div>
      </div>

      <div className="Pro_Card bluebg">
        <div className="Pro_Card_Title">
          <span className="Pro_Card_Title_Span">Total Tenants</span>
        </div>
        <div className="Pro_Card_Icon">
        <i class="fa-solid fa-person"></i>
          <span className="Pro_Card_Icon_Span">10</span>
        </div>
      </div>

      <div className="Pro_Card orangebg">
        <div className="Pro_Card_Title">
          <span className="Pro_Card_Title_Span">Rent Colleciton</span>
        </div>
        <div className="Pro_Card_Icon">
        <i class="fa-solid fa-indian-rupee-sign"></i>
          <span className="Pro_Card_Icon_Span">1000</span>
        </div>
      </div>
      
    </div>
  );
}
