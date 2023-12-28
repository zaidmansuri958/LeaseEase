import React from 'react'
import './Hero.css'
import image from '../Assets/building.png'
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
        <h1>NEW STANDARD <br></br>FOR NEW LIVING...</h1>
        <h3>Stunning contemporary home with panoramic views, gourmet kitchen, and luxurious master suite. Expansive outdoor living space, private pool, and smart home technology. Ideal blend of elegance and functionality.</h3>
        <Link style={{textDecoration:'none',color:'whitesmoke'}} to='/properties'><button>Explore Now</button></Link>
        </div>
        <div className='hero-right'>
        <img src={image}></img>
        </div>
    </div>
  )
}
