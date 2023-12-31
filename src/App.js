import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Properties} from "./Pages/Properties";
import { Home} from "./Pages/Home";
import { TenantRegistration } from "./Pages/TenantRegistration";
import { LandlordRegistration } from "./Pages/LandlordRegistration";
import { Aboutus } from "./Pages/Aboutus";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
