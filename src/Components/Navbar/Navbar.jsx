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
        <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:'none',color:'black'}} to='/contact'>Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
      </ul>
      <div className="register">
      <Link to='/loginsignup'><button>Register</button></Link>
      </div>
    </div>
  );
};
