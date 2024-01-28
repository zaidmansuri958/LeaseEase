import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import Cookies from "js-cookie";
import avatar from "../Assets/avatar.png";

export const Navbar = ({ user }) => {
  const navigate = useNavigate();
  const [openProfile, setOpenprofile] = useState(false);

  const goToMessage = () => {
    navigate("/message", { state: { LandlordId: null } });
  };

  const logout = () => {
    Cookies.remove("uid");
    Cookies.remove("user-type");
    alert("Logout Successfully");
  };
  const [menu, setMenu] = useState("home");
  return (
    <div className="navbar">
      <h1>LeaseEase.</h1>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
          }}
        >
          <Link style={{ textDecoration: "none", color: "black" }} to="/">
            Home
          </Link>
          {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("property");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/properties"
          >
            Property
          </Link>
          {menu === "property" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("aboutus");
          }}
        >
          <Link
            style={{ textDecoration: "none", color: "black" }}
            to="/aboutus"
          >
            About us
          </Link>
          {menu === "aboutus" ? <hr /> : <></>}
        </li>
      </ul>
      <div
        className={JSON.stringify(user) === "[]" ? "register" : "register-hide"}
      >
        <Link to="/tenant-registration">
          <button className="tenant-btn">Become Tenant</button>
        </Link>
        <Link to="/landlord-registration">
          <button className="landlord-btn">Become Landlord</button>
        </Link>
      </div>
      <div
        className={
          JSON.stringify(user) === "[]" ? "greetings-hide" : "greetings"
        }
      >
        {/* <div className="messageBtn" onClick={goToMessage}>
         <label>
            Messages
      </label>
          <i class="fa-solid fa-message"></i>
        </div> */}
        <h3>Welcome, {user.First_Name}</h3>
        <img src={avatar} onClick={()=>setOpenprofile((prev)=> !prev)}/>
        {openProfile && (
          <div className="dropdown-list">
            <ul>
              <Link to="/dashboard"><li>Profile</li></Link>
              <li onClick={goToMessage}>Messages</li>
              <li onClick={logout} className="logout-btn">
                Logout
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
