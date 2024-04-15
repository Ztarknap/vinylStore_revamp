import './item-card.styles.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {addToCart} from '../../store/cart/cart.action'
import {ItemInfoPropsType, ItemType} from '../../utils/ts_types'
import { IRootState } from "../../store/root-reducer"
import IonIcon from '@reacticons/ionicons';

export const ItemCard = ( {item}:ItemInfoPropsType ) => {
    const {name, image, band, genre, price, releaseDate, quantAvailable,_id} = item;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state: IRootState) => state.cart.cartItems )
    const itemToCheckout = {
        _id: _id,
        name: name,
        quantity: 1
    } as ItemType
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
                {name}
                </div>
                <div className='shopping-info row'> 
                    <span className='item-price col-sm-6'>{price}</span>
                    <span className='col-sm-5'></span>
                    <span  className='col-sm-1'>
                    <IonIcon size="large" name="cart-outline" className="shop-icon" onClick={() => dispatch(addToCart(cartItems, itemToCheckout))}></IonIcon>         
                    </span>
                </div>
            </div>
        </div>
         
        
    )
}