import { createAction } from "../../utils/reducer/reducer.utils"
import { CART_ACTION_TYPES } from "./cart.types"
import {ItemType} from '../../utils/ts_types'
//wrapper functions for actions
export const addToCartWrap = (cartItems:ItemType[], itemToAdd:ItemType) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id == itemToAdd._id)
     
     if(existingCartItem) {
         return cartItems.map((cartItem) =>
         cartItem._id == itemToAdd._id
         ? {...cartItem, quantity: cartItem.quantity +1}
         : cartItem
         );
     }
     
     return   [...cartItems, {...itemToAdd, quantity: 1}] 
}

export const removeFromCartWrap = (cartItems:ItemType[], itemToRemove:ItemType) => {
    const existingCartItem = cartItems.find(
        (cartItem) => cartItem._id == itemToRemove._id)
        
     
     if(existingCartItem) {

        if(existingCartItem.quantity===1) 
        {return cartItems.filter((cartItem)=> cartItem._id != existingCartItem._id)}

         return cartItems.map((cartItem) =>   {  
            if(cartItem._id == itemToRemove._id)
            return  {...cartItem, quantity: cartItem.quantity -1} 
            else 
            return cartItem 
            }
         );
     }
     
}

export const addToCart = (cartItems:ItemType[], itemToAdd:ItemType) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, addToCartWrap(cartItems, itemToAdd));
}

export const removeFromCart = (cartItems:ItemType[], itemToRemove:ItemType) => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, removeFromCartWrap(cartItems, itemToRemove));
}

export const setCartIsOpen = (isCartOpen:boolean) => {
    return createAction(CART_ACTION_TYPES.SET_CART_IS_OPEN, !isCartOpen);
}

export const clearCart = () => {
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, [])
}