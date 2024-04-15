import './cart-dropdown.styles.scss'
import { useSelector} from "react-redux"
import { Link } from 'react-router-dom'
import { CartItem } from '../cart-item/cart-item.component'
import {ItemType} from '../../utils/ts_types'
import { IRootState } from "../../store/root-reducer"

export const CartDropdown =() => { 
    const cartItems = useSelector((state: IRootState) =>  state.cart.cartItems)
    return (
        <div className="cart-dropdown">
            <div className='item-list'>
                {cartItems.map((item: ItemType) => {return <CartItem key={item._id} item = {item}/>})}
            </div>
        <div className='btn-block'> 
            <button id='btn-to-checkout' className='btn-common-primary'> <Link id='link-to-checkout' to='/checkout'> To Checkout </Link></button>
        </div>
        </div>
    )
}