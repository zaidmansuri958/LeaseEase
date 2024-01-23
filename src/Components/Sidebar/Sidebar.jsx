import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to="/dashboard/myprofile">My Profile</Link>
      <Link to="/dashboard/complaints">Complaints</Link>
    </div>
  )
}
