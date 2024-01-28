import React from 'react'
import { Link } from 'react-router-dom';
import './Sidebar.css';
import { SidebarData } from './SidebarData';
import { useState } from 'react';

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false)
  const [iccon, setIcon] = useState(false)

  const showIcon = () => setIcon(!iccon)
  const showSidebar = () => setSidebar(!sidebar)
  return (
    <div className="sidebar">
      <div className='sub-sidebar'>
        <ul className='sidebarlist'>
    
          <div className='menu-bar'>
            <li className='list-style l1' onClick={showSidebar}><i class={iccon ? "fa-solid fa-xmark" : "fa-solid fa-bars"}></i></li>
            <li className='list-style l2'>Dashboard</li>

          </div>
          {/* <hr /> */}
          {SidebarData.map((val, key) => {
            return (
              <div className={sidebar ? "active" : "Nav-menu"}>
              <li className='Row' key={key}>
                <Link to={val.link} >
                  <div id='icon'>
                    {val.icon}
                  </div>
                  <div id='title'>
                    {val.title}
                  </div>
                </Link>
              </li>
              </div>
            )
          })}
        </ul>

      </div>
    </div>
  )
}
