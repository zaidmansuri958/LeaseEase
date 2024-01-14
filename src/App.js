import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { React, useState, useEffect } from "react";
import { Properties } from "./Pages/Properties";
import { Home } from "./Pages/Home";
import { TenantRegistration } from "./Pages/TenantRegistration";
import { LandlordRegistration } from "./Pages/LandlordRegistration";
import { ProductDetails } from "./Pages/ProductDetails";
import { Aboutus } from "./Pages/Aboutus";
import { Messenger } from "./Pages/Messenger";
import { Agreement } from "./Pages/Agreement";
import { PropertiesUpload } from "./Pages/PropertiesUpload";
import { Login } from "./Pages/Login";
import Cookies from "js-cookie";
import axios from "axios";


function App() {
  const token = Cookies.get("uid");
  console.log( "Bearer " + token);

  const [user,setUser]=useState([]);

  useEffect(()=>{
    const getUser = async () => {
      try {
        const res = await axios.get("http://localhost:5000/landlord", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }
    };
    getUser()
  },[])



  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user}/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/properties" element={<Properties />} />
          <Route
            exact
            path="/tenant-registration"
            element={<TenantRegistration />}
          />
          <Route
            exact
            path="/landlord-registration"
            element={<LandlordRegistration />}
          />
          <Route exact path="/aboutus" element={<Aboutus />} />
          <Route exact path="/message" element={<Messenger />} />
          <Route exact path="/productDetails" element={<ProductDetails />} />
          <Route exact path="/agreement" element={<Agreement />} />
          <Route exact path="/add-properties" element={<PropertiesUpload />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
