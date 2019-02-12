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
      <div>
        <h3>{this.props.property.address}, {this.props.property.city}</h3>
        <img src={this.state.mainImage} alt="Property Image"/>
        <p>Price: {this.props.property.price}</p>
        <p>Bedrooms: {this.props.property.bedrooms}</p>
        <p>Bathrooms: {this.props.property.bathrooms}</p>
        <p>Garages: {this.props.property.garages}</p>
        <Link to={`/listing/${this.state.id}`}>More info</Link>
      </div>
    )
  }
}

export { ListingInfo }
