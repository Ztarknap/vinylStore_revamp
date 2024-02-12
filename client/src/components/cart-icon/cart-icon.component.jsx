import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import { useSelector, useDispatch } from 'react-redux';
import { Fragment } from 'react';   
 
import { setCartIsOpen } from '../../store/cart/cart.action';
export const CartIcon =() =>  {

    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
     
    return(
        <span className='shop-cart'>
             
        <ion-icon size="large" className='shop-cart' name="cart-outline"  onClick={() => dispatch(setCartIsOpen(isCartOpen))}></ion-icon>
          {/*<ShoppingIcon className='shop-cart' onClick={() => dispatch(setCartIsOpen(isCartOpen))}></ShoppingIcon>*/} 
       
       </span>
    )
 }