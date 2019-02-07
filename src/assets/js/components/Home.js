import React from 'react'
import { HeroSection } from './HeroSection'
import { FeaturedListings } from './FeaturedListings'
import { Services } from './Services'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturedListings />
      <Services />
    </div>
  )
}

export { Home }
