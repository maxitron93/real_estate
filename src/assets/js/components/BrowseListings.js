import React from 'react'
import queryString from 'query-string'
import { data } from '../dummyData'
import { ListingInfo } from './ListingInfo'

const BrowseListings = (props) => {
  let queryStringObject = queryString.parse(props.location.search)
  console.log(queryStringObject.keywords)
  console.log(queryStringObject.city)
  console.log(queryStringObject.bedrooms)
  console.log(queryStringObject.maxPrice)

  return (
    <div>
      <h1>BrowseListings</h1>
      {data.map((current, index, array) => {
        return <ListingInfo key={index} property={current}/>
      })}
    </div>
  )
}

export { BrowseListings }
