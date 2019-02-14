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
          subImage1: propertyData.subImage1,
          subImage2: propertyData.subImage2,
          subImage3: propertyData.subImage3,
          subImage4: propertyData.subImage4,
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

  render() {
    if(this.state.exists) {
      return (
        <div className="component-listing">
          <h2>{this.state.address}, {this.state.city}</h2>
          <div>
            <div className="listing-container">
              <div className="images">
                <img className="main-image" src={this.state.mainImage} alt="Main Image"/>
                <div className="sub-images">
                  <img src={this.state.subImage1} alt="Sub Image"/>
                  <img src={this.state.subImage2} alt="Sub Image"/>
                  <img src={this.state.subImage3} alt="Sub Image"/>
                  <img src={this.state.subImage4} alt="Sub Image"/>
                </div>
              </div>
              <div className="information">
                <p>${this.state.price}</p>
                <p>{this.state.bedrooms} Bedrooms</p>
                <p>{this.state.bathrooms} Bathrooms</p>
                <p>{this.state.garages} Garages</p>
                <Link className="link-button back-button" to={`/browse`}>Back</Link>
                <Link className="link-button edit-button" to={`/listing/${this.state.id}/edit`}>Edit</Link>
              </div>
              <div className="description">
                <p>{this.state.description}</p>
              </div>
            </div>
            
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
