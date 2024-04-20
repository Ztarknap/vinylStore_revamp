import "./cart-item-checkout.styles.scss"
import {CartItemPropsType} from '../../utils/ts_types'

export const CartItemCheckout = ({item} : CartItemPropsType) => {
    const {name, quantity} = item;
     
    return(
        <div className="cart-item-checkout-position">
            <div className="checkout-position-name">{name}</div>
            <div className="checkout-position-quantity">{quantity}</div>
        </div>

    )
}