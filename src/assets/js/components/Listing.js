import React from 'react'

const Listing = (props) => {
  return (
    <div>
      <h1>Listing</h1>
      <h3>{props.match.params.id}</h3>
    </div>
  )
}

export { Listing }
