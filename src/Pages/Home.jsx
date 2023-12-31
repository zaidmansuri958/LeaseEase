import React from 'react'
import { Footer } from '../Components/Footer/Footer'
import { Hero } from '../Components/Hero/Hero'
import { ListingNumbers } from '../Components/ListingNumbers/ListingNumbers'
import { Popular } from '../Components/Popular/Popular'
import { Whyus } from '../Components/Whyus/Whyus'
import { Work } from '../Components/Work/Work'

export const Home = () => {
  return (
    <div>
      <Hero/>
      <Whyus/>
      <Popular/>
      <ListingNumbers/>
      <Footer/>
    </div>
  )
}
