import React from 'react'
import { Link } from 'react-router-dom'

class ListingInfo extends React.Component {
  state = {
    id: null,
    mainImage: null,
    address: '',
    city: '',
    bedrooms: null,
    bathrooms: null,
    garages: null,
    price: null
  }

  componentDidMount() {
    this.setState(() => {
      return {
        id: this.props.property.id,
        mainImage: this.props.property.mainImage,
        address: this.props.property.address,
        city: this.props.property.city,
        bedrooms: this.props.property.bedrooms,
        bathrooms: this.props.property.bathrooms,
        garages: this.props.property.garages,
        price: this.props.property.price
      }
    })
  }

  render() {
    return (
      <div className="component-listingInfo">
        <h3>{this.props.property.address}</h3>
        <h3>{this.props.property.city}</h3>
        <h3>${this.props.property.price}</h3>
        <Link to={`/listing/${this.state.id}`}>
          <img src={this.state.mainImage} alt="Property Image"/>
        </Link>
        
        <p>{this.props.property.bedrooms} Bedrooms</p>
        <p>{this.props.property.bathrooms} Bathrooms</p>
        <p>{this.props.property.garages} Garages</p>
        <Link className="button-more-info" to={`/listing/${this.state.id}`}>More info</Link>
      </div>
    )
  }
}

export { ListingInfo }
