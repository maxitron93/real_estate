import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './components/Home'
import { About } from './components/About'
import { BrowseListings } from './components/BrowseListings'
import { Listing } from './components/Listing'
import { EditListing } from './components/EditListing'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About}/>
        <Route exact path="/browse" component={BrowseListings}/>
        <Route exact path="/listing/:id" component={Listing}/>
        <Route exact path="/listing/:id/edit" component={EditListing}/>
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
)

export { AppRouter }
