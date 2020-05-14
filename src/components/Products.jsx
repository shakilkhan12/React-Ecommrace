import React, {useContext} from "react"
import { productContext } from "../Global/productContext"
import {cartContext} from "../Global/cartContext"
import Banner from "./Banner"
const Products = ({ error}) => {
   const {products} = useContext(productContext);
   const {dispatch} = useContext(cartContext);
    return(
        <>
        {error ? <div className="error">{error}</div> : '' }
        
        <div className="products" style={{marginTop: '120px'}}>
        {products.map(product => (
            <div className="product" key={product.id}>
              <div className="pro">
            <div className="productImage">
              <img src={product.image} alt="Not found"/>
            </div>
            <div className="productDetails">
                <div className="proName">
                 <h4>{product.name}</h4>
                </div>
               <div className="proPrice">
                   ${product.price}
               </div>
            </div>
            <div className="proButton">
                 {/* <button className="buyNow" onClick={() => addToCart(product.id)}>By Now</button> */}
                 <button className="buyNow" onClick={() => dispatch({type: 'ADD_TO_CART', id: product.id, products})}>add to cart</button>
               </div>
               {product.productStatus === 'new' ? <div className="new">New</div>: ''}
               {product.productStatus === 'hot' ? <div className="hot">Hot</div>: ''}
            </div>
            </div>
        ))}
        
        </div>
      
        </>
    )

}

export default Products;