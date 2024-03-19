 import { useSelector, useDispatch } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cart.action';
export const CartIcon =() =>  {

    const dispatch = useDispatch();
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
     
    return(
      <div className='shop-cart'>
         {/*opening cart by changing state*/}    
        <ion-icon size="large" className='shop-cart' name="cart-outline"  onClick={() => dispatch(setCartIsOpen(isCartOpen))}></ion-icon>
      </div>
    )
 }