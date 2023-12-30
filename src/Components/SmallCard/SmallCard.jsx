import React from 'react'
import './SmallCard.css'

export const SmallCard = (props) => {
  return (
    <div className='small-card'>
        <img src={props.image}/>
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
    </div>
  )
}
