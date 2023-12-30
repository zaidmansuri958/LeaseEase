import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Work } from '../Components/Work/Work'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Work/>
      <Popular/>
      <Footer/>
    </div>
  )
}
