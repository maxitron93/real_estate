import React from 'react'
import { data } from '../dummyData'
import { Link } from 'react-router-dom'

class Listing extends React.Component {
  state = {
    exists: false,
    id: null,
    mainImage: '',
    address: '',
    city: '',
    description: '',
    bedrooms: null,
    bathrooms: null,
    garages: null,
    price: null
  }

  componentDidMount() {
    let propertyData = data.filter((current, index, array) => {
      return current.id === parseInt(this.props.match.params.id)
    })[0]

    if(propertyData) {
      this.setState(() => {
        return {
          exists: true,
          id: propertyData.id,
          mainImage: propertyData.mainImage,
          address: propertyData.address,
          city: propertyData.city,
          description: propertyData.description,
          bedrooms: propertyData.bedrooms,
          bathrooms: propertyData.bathrooms,
          garages: propertyData.garages,
          price: propertyData.price
        }
      })
    }
  }

  handlePrintState = () => {
    console.log(this.state)
  }

  render() {
    if(this.state.exists) {
      return (
        <div>
          <h1>Listing</h1>
          <div>
            <h3>{this.state.address}, {this.state.city}</h3>
            <img src={this.state.mainImage} alt=""/>
            <p>Price: {this.state.price}</p>
            <p>Bedrooms: {this.state.bedrooms}</p>
            <p>Bathrooms: {this.state.bathrooms}</p>
            <p>Garages: {this.state.garages}</p>
            <Link to={`/listing/${this.state.id}/edit`}>Edit</Link>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Listing not found</h1>
          <Link to={`/browse`}>Listings</Link>
        </div>
      )
    }
  }
}

export { Listing }
