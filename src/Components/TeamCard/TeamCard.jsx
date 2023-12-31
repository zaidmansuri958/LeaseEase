import React from 'react'
import './TeamCard.css'

export const TeamCard = (props) => {
  return (
    <div className='team-card'>
        <img src={props.image}/>
        <h2>{props.name}</h2>
        <h3>{props.position}</h3>
        <p>{props.desc}</p>
        <h4>{props.email}</h4>
    </div>
  )
}
