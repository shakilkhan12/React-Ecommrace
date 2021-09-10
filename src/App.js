import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import axios from "axios"
import Navbar from "./components/Navbar"
import Products from "./components/Products"
import Cart from "./components/Cart"
import ProductContextProvider from "./Global/productContext"
import CartContextProvider from "./Global/cartContext"

function App() {
  const fetchUsers = async () => {
<<<<<<< HEAD
    try {
     const {data} = await axios.get("/.netlify/functions/users");
    console.log('Your users: ', JSON.parse(data));
    } catch(err => {
      console.log(err)
    })
=======
     try {
      const {data} = await axios.get("/.netlify/functions/users");
      console.log('Your users: ', data);
     } catch (error) {
       console.log('your errors: ', error)
     }
>>>>>>> d7de2c1da1ade1fcff8966c589ddf850ad4b6f7f
  }
 useEffect(() => {
   fetchUsers();
 }, [])
 console.log('Hello app component!')
  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
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
