import "./cart-item.styles.scss"
import {CartItemPropsType} from '../../utils/ts_types'

export const CartItem = ({item}: CartItemPropsType) => {
    const {name, quantity} = item;
     
    return(
        <div className="cart-item-position">
            <span className="">{name}</span>
            <span className="">{quantity}</span>
        </div>

    )
}