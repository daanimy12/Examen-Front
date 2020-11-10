import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import ProductsContextProvider from './Global/ProductsContext'
import Products from './components/Products'
import Details from './components/Details'
import NotFound from './components/NotFound'

function App() {
  return (
    <div className="App">
      <ProductsContextProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/Details/:id" exact component={Details} />
            <Route path="/" exact component={Products} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ProductsContextProvider>
    </div>
  );
}

export default App;
