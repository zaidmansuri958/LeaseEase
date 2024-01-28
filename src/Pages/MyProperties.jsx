import React from 'react'
import "./CSS/MyProperties.css";
import EditProperties from '../Components/EditPropertiesCard/EditProperties';
import PropertiesCard from '../Components/NumberCards/PropertiesCard';

export default function MyProperties() {
  return (
    <div className='My_Properties'>
      <div className='Pro_Cards'>
        <PropertiesCard/>
      </div>
      <div className=''>
        <EditProperties />
        <EditProperties />
        <EditProperties />
      </div>
    </div>
  )
}
