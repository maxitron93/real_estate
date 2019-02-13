import React from 'react'
import { Link } from 'react-router-dom'

class HeroSection extends React.Component {
  state= {
    keywords: "",
    city: "",
    bedrooms: "",
    maxPrice: "",
    queryString: ""
  }

  handleUpdateQuery =() => {
    this.setState(() => {
      return {
        queryString: `/?keywords=${this.state.keywords}&city=${this.state.city}&bedrooms=${this.state.bedrooms}&maxPrice=${this.state.maxPrice}`
      }
    })
  }

  handleUpdateInput = async (event) => {
    let searchField = event.target.name
    let searchValue = event.target.value
    await this.setState(() => {
      return {
        [searchField]: searchValue
      }
    })
    this.handleUpdateQuery()
  }
  
  render() {
    return (
      <div className="component-hero">
        <div className="search-area">
          <h3>Property Searching Just Got So Easy</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quas, asperiores eveniet vel nostrum magnam voluptatum tempore! Consectetur, id commodi!</p>
          <div className="input-area"> 
            <input type="text" name="keywords" placeholder="Keywords" onChange={this.handleUpdateInput}/>
            <input type="text" name="city" placeholder="City" onChange={this.handleUpdateInput}/>
            <input type="number" name="bedrooms" placeholder="Maximum Bedrooms" onChange={this.handleUpdateInput}/>
            <input type="number" name="maxPrice" placeholder="Maximum Price" onChange={this.handleUpdateInput}/>
          </div>
          <Link to={`/browse${this.state.queryString}`} className="search-button">Search</Link>
        </div>
      </div>
    )
  }
  
}
export { HeroSection }
