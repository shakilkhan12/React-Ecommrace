import React, {createContext, useReducer} from "react"
import {CartReducer} from "./cartReducer"
export const cartContext = createContext();

const CartContextProvider = (props) => {
    // const someData = ['Hello'];
    const [cart, dispatch] = useReducer(CartReducer, {shoppingCart: [], totalPrice: 0, message: '', qty: 0})
      
    return(
        <cartContext.Provider value={{...cart, dispatch}}>
           {props.children}
        </cartContext.Provider>
    )

}

export default CartContextProvider;