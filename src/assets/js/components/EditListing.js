import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { data } from '../dummyData'

class EditListing extends React.Component {
  state = {
    property: {},
    edited: false,
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.property)

    data.forEach((current, index, array) => {
      if(current.id === parseInt(this.state.property.id)) {
        current.address = event.target.address.value
        current.city = event.target.city.value
        current.description = event.target.description.value
        current.bedrooms = event.target.bedrooms.value
        current.bathrooms = event.target.bathrooms.value
        current.garages = event.target.garages.value
        current.price = event.target.price.value
      }
    })

    this.setState(() => {
      return {
        edited: true
      }
    })

    console.log(data)
  }

  componentDidMount() {
    let property
    data.forEach((current, index, array) => {
      if(current.id === parseInt(this.props.match.params.id)) {
        property = current
      }
    })
    this.setState(() => {
      return {
        property: property
      }
    })
  }

  render() {
    if(!this.state.edited) {
      return (
        <div>
          <img src={this.state.property.mainImage} alt=""/>
          <form onSubmit={this.handleOnSubmit}>
            <input type="text" name="address" defaultValue={this.state.property.address} />
            <input type="text" name="city" defaultValue={this.state.property.city} />
            <input type="text" name="description" defaultValue={this.state.property.description} />
            <input type="text" name="bedrooms" defaultValue={this.state.property.bedrooms} />
            <input type="text" name="bathrooms" defaultValue={this.state.property.bathrooms} />
            <input type="text" name="garages" defaultValue={this.state.property.garages} />
            <input type="text" name="price" defaultValue={this.state.property.price} />
            <Link to={`/listing/${this.state.property.id}`}>Cancel</Link>
            <button>Save changes</button>
          </form>
        </div>
      )
    } else {
      return <Redirect to={`/listing/${this.state.property.id}`} />
    }
    
  }
  
}

export { EditListing }

/*
{
  id: 1,
  mainImage: Home1,
  address: 'Jalan Sudirman No.100',
  city: 'Jakarta',
  description: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  bedrooms: 6,
  bathrooms: 4,
  garages: 2,
  price: 500000
}
*/