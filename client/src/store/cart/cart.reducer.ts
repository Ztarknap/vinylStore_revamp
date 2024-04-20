import { CART_ACTION_TYPES } from "./cart.types";
import { AnyAction } from 'redux'
const INITIAL_STATE = {
    cartItems : [],
    isCartOpen: false
}


export const cartReducer = (state = INITIAL_STATE, action = ({} as AnyAction)) => {
    const {type, payload} = action;
    switch(type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS: {
            return {
                ...payload,
                cartItems: payload
            }
        }
        case CART_ACTION_TYPES.SET_CART_IS_OPEN: {
            return {
                ...state,
                isCartOpen: payload,
                
            }
        }
        default:
            return {
                ...state
            }
    }
}