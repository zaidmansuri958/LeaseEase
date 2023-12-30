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
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/properties" element={<Properties/>}/>
          <Route exact path="/loginsignup" element={<LoginSignup/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
