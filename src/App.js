import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route} from "react-router-dom";
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
import { Dashboard } from "./Pages/Dashboard";
import { AddComplaints } from "./Pages/Complaints/AddComplaints";

function App() {
  const token = Cookies.get("uid");
  const user_type = Cookies.get("user-type");
  console.log(user_type);
  console.log("Bearer " + token);
  let url = "http://localhost:5000/";
  if (user_type === "Tenant") {
    url = url + "tenant";
  } else {
    url = url + "landlord";
  }

  console.log(url);
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(url, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);
  console.log(user);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} />
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
          <Route exact path="/complaint" element={<AddComplaints/>}/>
          <Route exact path="/dashboard/*" element={
          <Dashboard>
            <Route path="myprofile" element={<Login />} />
          </Dashboard>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
