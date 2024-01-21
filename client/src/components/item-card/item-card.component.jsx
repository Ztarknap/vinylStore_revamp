import './item-card.styles.scss'
import Alert from 'react-bootstrap/Alert';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux';
import {addToCart} from '../../store/cart/cart.action'
export const ItemCard = ( {item} ) => {
    const {name, image, band, genre, price, _id} = item;
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems )
    return (
         
             
        <div className='item-container '>
        <div className='cover-container'>
             
        <div className='background-image' style={{backgroundImage:`url(${image})`}}>
 
         </div>
  
        </div>
        <div className='cart-info'>
            <div className='item-name'>
         {name}</div>
         <div className='shopping-info row'> 
         <span className='item-price col-sm-6'>{price}</span>
         <span className='col-sm-5'></span>
         <span  className='col-sm-1'>
         <ShoppingIcon className='add-to-cart' onClick={() => dispatch(addToCart(cartItems, item))}></ShoppingIcon>
         </span>
         
         </div>
         </div>
        </div>
         
        
    )
}