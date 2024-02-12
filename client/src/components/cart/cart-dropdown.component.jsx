import './cart-dropdown.styles.scss'
import { useSelector, useDispatch } from "react-redux"
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { CartItem } from '../cart-item/cart-item.component'
import { Checkout } from '../../routes/checkout/checkout.component'
export const CartDropdown =() => {
    const cartItems = useSelector((state) => state.cart.cartItems )
    return (
        <div className="cart-dropdown">
            <div className='col'>
            {cartItems.map((item) => {return <CartItem key={item._id} item = {item}/>})}</div>
        <button id='btn-to-checkout' className='btn-common-primary'> <Link id='link-to-checkout' to='/checkout'> To Checkout </Link></button>
        </div>
    )
}