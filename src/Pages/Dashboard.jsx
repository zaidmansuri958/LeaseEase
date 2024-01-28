import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Sidebar } from '../Components/Sidebar/Sidebar';
import "./CSS/Dashboard.css"
import MyProfile from './MyProfile';
import MyProperties from './MyProperties';
import {AddComplaints} from './Complaints/AddComplaints'


export const Dashboard = () => {
  return (
    <>
    <div className='dashboard'>
      <div className="dash_sidebar">
    <Sidebar />
    </div>
      <div className="content">
        {/* Content specific to the dashboard */}
        <Routes>
          <Route path="/" element={<MyProfile />} />
         <Route path="/myprofile" element={<MyProfile />} />
         <Route path='/complaints' element={<AddComplaints/>}/>

         <Route path="/myproperties" element={<MyProperties />} />

         
          {/* Add more routes for other dashboard pages */}
        </Routes>
      </div>
    </div>
    </>
  )
}
