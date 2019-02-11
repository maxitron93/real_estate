import React from 'react'
import queryString from 'query-string'

const BrowseListings = (props) => {
  let queryStringObject = queryString.parse(props.location.search)
  console.log(queryStringObject.keywords)
  console.log(queryStringObject.city)
  console.log(queryStringObject.bedrooms)
  console.log(queryStringObject.maxPrice)

  return (
    <div>
      <h1>BrowseListings</h1>
    </div>
  )
}

export { BrowseListings }
