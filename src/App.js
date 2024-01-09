import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Properties} from "./Pages/Properties";
import { Home} from "./Pages/Home";
import { TenantRegistration } from "./Pages/TenantRegistration";
import { LandlordRegistration } from "./Pages/LandlordRegistration";
import {ProductDetails} from "./Pages/ProductDetails";
import { Aboutus } from "./Pages/Aboutus";
import { Messenger } from "./Pages/Messenger";
import { Agreement } from "./Pages/Agreement";
import { PropertiesUpload } from "./Pages/PropertiesUpload";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/properties" element={<Properties/>}/>
          <Route exact path="/tenant-registration" element={<TenantRegistration/>}/>
          <Route exact path="/landlord-registration" element={<LandlordRegistration/>}/>
          <Route exact path="/aboutus" element={<Aboutus/>}/>
          <Route exact path="/message" element={<Messenger/>}/>
          <Route exact path="/productDetails" element={<ProductDetails/>}/>
          <Route exact path="/agreement" element={<Agreement/>}/>
          <Route exact path="/add-properties" element={<PropertiesUpload/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
