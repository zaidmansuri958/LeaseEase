import React from 'react'
import { SmallCard } from '../SmallCard/SmallCard';
import why_us_data from '../Assets/why_us_data';
import './Work.css'

export const Work = () => {
  return (
    <div className='work'>
         <h1>What We Do?</h1>
    <h5>This is the best properties among all the properties. we deal with these types of properties.<br/>These are the best in the city.his is the best properties among all the properties. we deal with these types of properties.</h5>
    <div className="card-item">
        {why_us_data.map((item, i) => {
          return (
            <SmallCard
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              desc={item.desc}
            />
          );
        })}
      </div>
    </div>
  )
}
