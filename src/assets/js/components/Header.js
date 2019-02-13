import React from 'react'
import Logo from '../../img/favicon.png' // This is how to add images
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className="component-header">
      <div className="logo">
        <Link to="/"><img src={Logo} alt='Logo' width="40px"/></Link>
      </div>
      <ol>  
        <li><Link to="/">Cari Rumah</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/browse">Browse</Link></li>
      </ol>
    </div>
  )
}

export { Header }
