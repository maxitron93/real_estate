import React from 'react'
import { ListingInfo } from './ListingInfo'
import { data } from '../dummyData'

const FeaturedListings = () => {
  return (
    <div className="component-featuredListings">
      <h2>Featured Listings</h2>
      {data.slice(0, 3).map((current, index, array) => {
        return (
          <ListingInfo key={index} property={current}/>
        )
      })}
    </div>
  )
}

export { FeaturedListings }
