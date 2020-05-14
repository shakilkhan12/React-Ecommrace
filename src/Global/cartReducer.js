export const CartReducer = (state, action) => {
    let {shoppingCart, totalPrice} = state;
    let product;
    let index;
    let updatedPrice;
    switch(action.type){
        case 'ADD_TO_CART': 
        const check = shoppingCart.find(cart => cart.id === action.id);
        if(check){
            return state;
        } else {
            product = action.products.find(product => product.id === action.id);
            product['qty'] = 1;
            return {shoppingCart: [product,...shoppingCart], totalPrice: totalPrice+product.price};
        }
        break;
        case 'DELETE_PRODUCT':
            const filtered = shoppingCart.filter(cart => cart.id !== action.id);
            product = shoppingCart.find(cart => cart.id === action.id);
            // setAllPrice(allPrice - product.price * product.qty);
            updatedPrice = totalPrice - product.price * product.qty; 
            return {shoppingCart: [...filtered], totalPrice: updatedPrice}
            break;
        
        case 'INC':
            console.log('Inc run');
            product = shoppingCart.find(product => product.id === action.id);
            index = shoppingCart.findIndex(product => product.id === action.id);
            product.qty = product.qty + 1;
            
            totalPrice = totalPrice + product.price;
            console.log(product, totalPrice);
            shoppingCart[index] = product;
            return {shoppingCart: [...shoppingCart], totalPrice: totalPrice}
            break;

        case 'DEC': 
        product = shoppingCart.find(product => product.id === action.id);
        index = shoppingCart.findIndex(product => product.id === action.id);
       if(product.qty > 1){
           console.log('Yes graer');
       product.qty = product.qty - 1;
       updatedPrice = totalPrice - product.price;
       shoppingCart[index] = product;
       console.log("afer dec",shoppingCart);
       return {shoppingCart: [...shoppingCart], totalPrice: updatedPrice};
       }
       break;

       case 'EMPTY':
           console.log('Ruun');
        return {shoppingCart: [], totalPrice: 0}
        break;
    default: 
    return {shoppingCart:[...shoppingCart], totalPrice}

    }
    

}