import { useSelector, useDispatch } from 'react-redux';
import { setCartIsOpen } from '../../store/cart/cart.action';
import { IRootState } from "../../store/root-reducer"
import IonIcon from '@reacticons/ionicons';

export const CartIcon =() =>  {

    const dispatch = useDispatch();
    const isCartOpen = useSelector((state:IRootState) => state.cart.isCartOpen);
     
    return(
      <div>
         {/*opening cart by changing state*/}    
        <IonIcon size="large" className='shop-cart' name="cart-outline"  onClick={() => dispatch(setCartIsOpen(isCartOpen))}></IonIcon>
      </div>
    )
 }