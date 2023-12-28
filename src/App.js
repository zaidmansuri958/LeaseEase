import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Properties} from "./Pages/Properties";
import { Home} from "./Pages/Home";
import { LoginSignup } from "./Pages/LoginSignup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/properties" element={<Properties/>}/>
          <Route path="/loginsignup" element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
