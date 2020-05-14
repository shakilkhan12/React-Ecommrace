import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"

function App() {
  let [cart, setCart] = React.useState(false);
    const cartToggle = () => {
          setCart(!cart);
    }
 

  // console.log('Shopping Cart', shoppingCart);
  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar cartToggle={cartToggle} />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
