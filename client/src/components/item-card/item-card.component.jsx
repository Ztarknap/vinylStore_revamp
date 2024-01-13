import './item-card.styles.scss'
import Alert from 'react-bootstrap/Alert';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
export const ItemCard = ( {item} ) => {
    const {name, image, band, genre, price} = item;
    return (
         
             
        <div class='item-container '>
        <div class='cover-container'>
             
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
         <ShoppingIcon className='add-to-cart' onClick={console.log('opened')}></ShoppingIcon>
         </span>
         
         </div>
         </div>
        </div>
         
        
    )
}