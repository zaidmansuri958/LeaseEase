import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Properties} from "./Pages/Properties";
import { Home} from "./Pages/Home";
import { TenantRegistration } from "./Pages/TenantRegistration";
import { LandlordRegistration } from "./Pages/LandlordRegistration";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
