import React from 'react'
import KittenImage from '../../img/kitten.jpg' // This is how to add images

const Footer = () => {
  return (
    <div>
      <img src={KittenImage} alt='Kitten'/> {/* This is how to add images */}
      <h1>Footer</h1>
    </div>
  )
}

export { Footer }
