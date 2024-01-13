import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"


export const addToCartWrap = (cartItems, itemToAdd) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == itemToAdd.id)
     
     if(existingCartItem) {
         return cartItems.map((cartItem) =>
         cartItem.id == itemToAdd.id
         ? {...cartItem, quantity: cartItem.quantity +1}
         : cartItem
         );
     }
     
     return   [...cartItems, {...itemToAdd, quantity: 1}] 
}

export const removeFromCartWrap = (cartItems, itemToRemove) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id == itemToRemove.id)
        
     
     if(existingCartItem) {

        if(existingCartItem.quantity===1) 
        {return cartItems.filter((cartItem)=> cartItem.id != existingCartItem.id)}

         return cartItems.map((cartItem) =>   {  
            if(cartItem.id == itemToRemove.id)
            return  {...cartItem, quantity: cartItem.quantity -1} 
            else 
            return cartItem 
            }
         );
     }
     
}

export const addToCart = (cartItems, itemToAdd) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addToCartWrap(cartItems, itemToAdd));
}

export const removeFromCart = (cartItems, itemToRemove) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeFromCartWrap(cartItems, itemToRemove));
}

export const setCartIsOpen = (isCartOpen) => {
    return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, !isCartOpen);
}