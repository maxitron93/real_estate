import React from 'react'

const EditListing = (props) => {
  return (
    <div>
      <h1>EditListing</h1>
      <h3>{props.match.params.id}</h3>
    </div>
  )
}

export { EditListing }
