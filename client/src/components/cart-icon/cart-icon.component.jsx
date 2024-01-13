import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import { useSelector, useDispatch } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cart.action';
export const CartIcon =() =>  {

    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
     
    return(
        <ShoppingIcon className='shop-cart' onClick={() => dispatch(setCartIsOpen(isCartOpen))}></ShoppingIcon>
    )
 }