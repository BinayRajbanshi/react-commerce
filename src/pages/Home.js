import React from 'react'

// components import
import PopularProducts from '../popularProducts/PopularProducts'
import Slider from '../slider/Slider'
import OurFeatures from '../ourFeatures/OurFeatures'


const Home = () => {
  return (
    <section>
        <Slider/>
      <PopularProducts/>
      <OurFeatures/>
    </section>
  )
}

export default Home
