import './item-card.styles.scss'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../../store/cart/cart.action'
export const ItemCard = ( {item} ) => {
    const {name, image, band, genre, price, releaseDate, quantAvailable,_id} = item;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.cartItems )

    const itemClickHandler = () => {
        navigate("/item_detail", {
             replace: true, state: {name: name, image: image, band: band, genre: genre, price: price, releaseDate: releaseDate, quantAvailable: quantAvailable}
            });
    }
    return (
         
             
        <div className='item-container'>
        <div className='cover-container' onClick={() => itemClickHandler()}>
             
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
         <ion-icon size="large" className='add-to-cart' name="cart-outline" onClick={() => dispatch(addToCart(cartItems, item))}></ion-icon>         
         </span>
         
         </div>
         </div>
        </div>
         
        
    )
}