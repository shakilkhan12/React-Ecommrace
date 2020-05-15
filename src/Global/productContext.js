import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import computer from "../assets/computer.jpg";
import iphone from "../assets/iphone.jpg";
import laptop from "../assets/laptop.jpg";
import led from "../assets/led.jpg"
import microphone from "../assets/microphone.jpg"
import mobile from "../assets/mobile.jpg"
import shoes from "../assets/shoes.jpg"
import watch from "../assets/watch.jpg"
import perfum from "../assets/perfum.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products, dispatch] = useReducer(ProductReducer, [
        {id: 1, name: 'Laptop', price: 40, image: laptop, productStatus: 'hot'},
        {id: 2, name: 'Perfume', price: 200, image: perfum,productStatus: 'new'},
        {id: 3, name: 'Watch', price: 300, image: watch,productStatus: 'new'},
        {id: 4, name: 'Shoes', price: 150, image: shoes,productStatus: 'new'},
        {id: 5, name: 'Microphone', price: 160, image: microphone,productStatus: 'hot'},
        {id: 6, name: 'LED Screen', price: 500, image: led,productStatus: 'new'},
        {id: 7, name: 'Iphone mobile', price: 240, image: iphone,productStatus: 'hot'},
        {id: 8, name: 'LG Mobile', price: 120, image: mobile,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products, dispatch}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;