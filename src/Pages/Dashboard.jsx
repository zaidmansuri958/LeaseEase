import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from '../Components/Sidebar/Sidebar';
import { Aboutus } from './Aboutus';
import { Login } from "./Login";

export const Dashboard = () => {
  return (
    <div>
    <Sidebar />
      <div className="content">
        {/* Content specific to the dashboard */}
        <Routes>
          <Route path="/" element={<Aboutus />} />
         <Route path="/myprofile" element={<Login />} />
          {/* Add more routes for other dashboard pages */}
        </Routes>
      </div>
    </div>
  )
}
