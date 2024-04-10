import "./cart-item.styles.scss"
import {CartItemProps} from '../../utils/ts_types'

/*
type Item = {
    cartItems : [],
    isCartOpen: boolean
}*/ 

 

export const CartItem = ({item}: CartItemProps) => {
    const {name, quantity} = item;
     
    return(
        <div className="cart-item-position">
            <span className="">{name}</span>
            <span className="">{quantity}</span>
        </div>

    )
}