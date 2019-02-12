import React from 'react'
import { data } from '../dummyData'

const EditListing = (props) => {
  let property
  data.forEach((current, index, array) => {
    if(current.id === parseInt(props.match.params.id)) {
      property = current
    }
  })

  const handleOnSubmit = (event) => {
    event.preventDefault()

    property.address = event.target.address.value
    property.city = event.target.city.value
    property.description = event.target.description.value
    property.bedrooms = event.target.bedrooms.value
    property.bathrooms = event.target.bathrooms.value
    property.garages = event.target.garages.value
    property.price = event.target.price.value
  }

  return (
    <div>
      <img src={property.mainImage} alt=""/>
      <form onSubmit={handleOnSubmit}>
        <input type="text" name="address" defaultValue={property.address} />
        <input type="text" name="city" defaultValue={property.city} />
        <input type="text" name="description" defaultValue={property.description} />
        <input type="text" name="bedrooms" defaultValue={property.bedrooms} />
        <input type="text" name="bathrooms" defaultValue={property.bathrooms} />
        <input type="text" name="garages" defaultValue={property.garages} />
        <input type="text" name="price" defaultValue={property.price} />
        <button>Save changes</button>
      </form>
      
      <h3>{property.address}, {property.city}</h3>
    </div>
  )
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