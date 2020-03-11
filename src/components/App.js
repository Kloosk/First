import React from 'react';
import { HashRouter as Router, Route, Switch} from "react-router-dom";
import {createGlobalStyle} from "styled-components";
import Home from "./Home";
import Cart from "./pages/cart/Cart";
import Products from "./pages/products/Products";
import ItemDetails from "./pages/products/ItemDetails";
import HomeEn from "./lang/en/HomeEn";
const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   box-sizing: border-box; 
   overflow-x: hidden;
  }`;
function App() {
  return (
      <Router>
          <GlobalStyle/>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/en' component={HomeEn} />
              <Route path='/cart' component={Cart} />
              <Route path='/products' exact component={Products} />
              <Route path='/products/:id' component={ItemDetails} />
          </Switch>
      </Router>
  );
}
export default App;
