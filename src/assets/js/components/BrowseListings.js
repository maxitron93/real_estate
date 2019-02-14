import React from 'react'
import queryString from 'query-string'
import { data } from '../dummyData'
import { ListingInfo } from './ListingInfo'

class BrowseListings extends React.Component {
  state = {
    keywords: queryString.parse(this.props.location.search).keywords,
    city: queryString.parse(this.props.location.search).city,
    maxBedrooms: queryString.parse(this.props.location.search).bedrooms,
    maxPrice: queryString.parse(this.props.location.search).maxPrice,
    properties: []
  }

  componentDidMount() {
    let properties = data.filter((current, index, array) => {
      let keywordsMatch = true
      let cityMatch = true
      let bedroomsMatch = true
      let maxPriceMatch = true

      if(this.state.keywords) {
        if(current.description.includes(this.state.keywords)) {
          keywordsMatch = true
        } else {
          keywordsMatch = false
        }
      }

      if(this.state.city) {
        if(this.state.city === current.city) {
          cityMatch = true
        } else {
          cityMatch = false
        }
      }

      if(this.state.maxBedrooms) {
        if(this.state.maxBedrooms >= parseInt(current.bedrooms)) {
          bedroomsMatch = true
        } else {
          bedroomsMatch = false
        }
      }

      if(this.state.maxPrice) {
        if(this.state.maxPrice >= parseInt(current.price)) {
          maxPriceMatch = true
        } else {
          maxPriceMatch = false
        }
      }

      if(keywordsMatch && cityMatch && bedroomsMatch && maxPriceMatch) {
        return current
      }
    })

    this.setState(() => {
      return {
        properties: properties
      }
    })
  }

  render() {
    if(this.state.properties.length !== 0) {
      return (
        <div className="component-browseListings">
          <h2>BrowseListings</h2>
          {this.state.properties.map((current, index, array) => {
            return <ListingInfo key={index} property={current}/>
          })}
        </div>
      )
    } else {
      return (
        <div className="component-browseListings">
          <h2>No Listings Found</h2>
        </div >
      )
    }
  }
  
}

export { BrowseListings }
