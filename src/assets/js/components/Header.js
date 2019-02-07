import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <h1>Header</h1>
      <ol>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/browse">Browse</Link></li>
        <li><Link to={`/listing/${34}`}>Listing</Link></li>
        <li><Link to={`/listing/${1613}/edit`}>Edit</Link></li>
      </ol>
    </div>
  )
}

export { Header }
