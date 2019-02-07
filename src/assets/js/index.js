import React from 'react';
import ReactDOM from 'react-dom';
import KittenImage from '../img/kitten.jpg'; // This is how to add images
import 'normalize.css/normalize.css';
import '../css/styles.scss';
require('../img/favicon.png')

// Import these Components from 'react-router-dom' to enable the basics of client-side routing. Note: For client-side routing to work (by navigating via the URL bar), the webpack config's devServer needs to have 'historyApiFallback: true'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

// Example Home Component
const Home = () => (
  <div>
    <h2>Home</h2>
    Welcome to React Router! Nothing much to see here. Click on the 'About' link above to find out more!
    <img src={KittenImage} alt='Kitten'/> {/* This is how to add images */}
  </div>
)

// Example About Component
const About = () => (
  <div>
    <h2>About</h2>
    <p>The purpose of this repo is to provide a quick reference for how basic React Router works! Did you notice that the browser didn't refresh when you clicked on the 'About' link? No? Click on another link to check it out!</p>
  </div>
)

// Example Help Component
const Help = (props) => {
  console.log(props) // React Router passes in a lot of props to the component by default
  console.log(props.location) // props.location is where to get access to the pathname and query strings
  return (
    <div>
      <h2>Help</h2>
      <p>If you have any problems, refer to the <a href="https://reacttraining.com/react-router/web/guides/philosophy">React Router Documentation</a> for more information</p>
    </div>
  )
}

// Example Expense Component to demonstrate dynamic urls
const Expense = (props) => {
  console.log(props.match.params) // this is where to access the expense id
  return (
    <div>
      <h2>Expense</h2>
      <p>Example of dyamic urls. ID of {props.match.params.id}</p>
    </div>
  )
}

const AppRouter = () => (
  // <BrowserRouter> is a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep your UI in sync with the URL.
  <BrowserRouter>
    {/* Everything inside <BrowserRouter> needs to be wrapped inside a <div> tag because <BrowserRouter> can only have one child */}
    <div>
      {/* Adding the links outside of <Switch> means that these links will render on every 'page' */}
      <ul>
        {/* Link provides declarative, accessible navigation around your application. */}
        <h1>Welcome to React Router!</h1>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/help">Help</Link></li>
        <li><Link to={`/expense/${Math.round(Math.random() * 100)}`}>Expenses</Link></li> {/* Example of how to do a dynamic link */}
      </ul>

      <hr/>
      {/* Switch enders a route exclusively. In contrast, every <Route> that matches the location renders inclusively. */}
      <Switch>
        {/* If someone visits '/', render the Home Component. Adding 'exact' means this Route will only match if the path matches the location.pathname exactly.*/}
        <Route exact path="/" component={Home} />

        {/* If someone visits '/about', render the About Component */}
        <Route path="/about" component={About}/>

        {/* If someone visits '/help', render the Help Component */}
        <Route path="/help" component={Help}/>

        {/* If someone visits '/expense/:id', render the Expense Component with that expense id's information */}
        <Route path="/expense/:id" component={Expense}/>
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(<AppRouter />, document.getElementById('app'))