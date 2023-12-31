import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
    const [menu,setMenu]=useState("home");
  return (
    <div className="navbar">
    <h1>LeaseEase.</h1>
      <ul className="nav-menu">
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:'none',color:'black'}} to='/'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("property")}}><Link style={{textDecoration:'none',color:'black'}} to='/properties'>Property</Link>{menu==="property"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("aboutus")}}><Link style={{textDecoration:'none',color:'black'}} to='/aboutus'>About us</Link>{menu==="aboutus"?<hr/>:<></>}</li>
      </ul>
      <div className="register">
      <Link to='/tenant-registration'><button className="tenant-btn">Become Tenant</button></Link>
      <Link to='/landlord-registration'><button className="landlord-btn">Become Landlord</button></Link>
      </div>
    </div>
  );
};
