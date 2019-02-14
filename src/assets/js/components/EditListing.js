import React from 'react'
import { Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import { data } from '../dummyData'

class EditListing extends React.Component {
  state = {
    property: {},
    edited: false,
    description: ""
  }

  handleOnSubmit = (event) => {
    event.preventDefault()

    data.forEach((current, index, array) => {
      if(current.id === parseInt(this.state.property.id)) {
        current.address = event.target.address.value
        current.city = event.target.city.value
        current.description = event.target.description.value
        current.bedrooms = event.target.bedrooms.value
        current.bathrooms = event.target.bathrooms.value
        current.garages = event.target.garages.value
        current.price = event.target.price.value
        current.description = event.target.description.value
      }
    })

    this.setState(() => {
      return {
        edited: true
      }
    })
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
        property: property,
        description: property.description
      }
    })
  }

  handleChange = (event) => {
    let newDescription = event.target.value
    this.setState(() => {
      return {
        description: newDescription
      }
    })
  }

  render() {
    if(!this.state.edited) {
      return (
        <form onSubmit={this.handleOnSubmit}>
          <div className="component-edit">
            <h2>Edit Property</h2>
            <div className="edit-container">
              <div className="images-area">
                <img className="main-image" src={this.state.property.mainImage} alt="Main Image"/>
                <div className="sub-images">
                  <img src={this.state.property.subImage1} alt="Sub Image"/>
                  <img src={this.state.property.subImage2} alt="Sub Image"/>
                  <img src={this.state.property.subImage3} alt="Sub Image"/>
                  <img src={this.state.property.subImage4} alt="Sub Image"/>
                </div>
              </div>
                <div className="proerty-information-area">
                  <div className="edit-input-area">
                    <p>Address:</p>
                    <input type="text" name="address" defaultValue={this.state.property.address} />
                  </div>
                  <div className="edit-input-area"> 
                    <p>City:</p>
                    <input type="text" name="city" defaultValue={this.state.property.city} />
                  </div>
                  <div className="edit-input-area">
                    <p>Bedrooms:</p>
                    <input type="text" name="bedrooms" defaultValue={this.state.property.bedrooms} />
                  </div>
                  <div className="edit-input-area">
                    <p>Bathrooms:</p>
                    <input type="text" name="bathrooms" defaultValue={this.state.property.bathrooms} />
                  </div>
                  <div className="edit-input-area">
                    <p>Garages:</p>
                    <input type="text" name="garages" defaultValue={this.state.property.garages} />
                  </div>
                  <div className="edit-input-area">
                    <p>Price:</p>
                    <input type="text" name="price" defaultValue={this.state.property.price} />
                  </div>
                </div>
                <div className="description-edit-area">
                  <p>Description:</p>
                  <textarea name="description" value={this.state.description} onChange={this.handleChange}/>
                </div>
                <button className="edit-button">Save changes</button>
                <Link className="link-button" to={`/listing/${this.state.property.id}`}>Cancel</Link>
            </div>
          </div>
        </form>
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