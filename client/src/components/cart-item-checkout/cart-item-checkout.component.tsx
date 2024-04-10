import "./cart-item-checkout.styles.scss"
import {CartItemProps} from '../../utils/ts_types'

export const CartItemCheckout = ({item} : CartItemProps) => {
    const {name, quantity} = item;
     
    return(
        <div className="cart-item-checkout-position">
            <div className="checkout-position-name">{name}</div>
            <div className="checkout-position-quantity">{quantity}</div>
        </div>

    )
}