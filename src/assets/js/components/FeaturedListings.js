import React from 'react'
import { ListingInfo } from './ListingInfo'
import { data } from '../dummyData'

const FeaturedListings = () => {
  return (
    <div>
      {data.map((current, index, array) => {
        return (
          <ListingInfo key={index} property={current}/>
        )
      })}
    </div>
  )
}

export { FeaturedListings }
