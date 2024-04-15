import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {addToCart} from '../../store/cart/cart.action'
import { IRootState } from "../../store/root-reducer"
import './item-card-detailed.styles.scss'

export const ItemCardDetailed =() => {
    const location = useLocation()
    const dispatch = useDispatch();
    const cartItems = useSelector((state:IRootState) => state.cart.cartItems )

    const {name, image, band, genre, price, releaseDate, quantAvailable} = location.state;
    return (
        <div className="item-card-detailed-block">
            <div className="item-card-detailed-image" style={{backgroundImage:`url(${image})`}}></div>
            <div className="item-card-detailed-description">
                <div><h1>{name}</h1></div>
                <div><h1>{band}</h1></div>
                <div> Release date: {releaseDate} </div>
                <div> Genre: {genre} </div>
                <div> {quantAvailable > 0?" Available ":"Sold out"} </div>
                <button className="btn-common-primary item-card-detailed-add" onClick={() => dispatch(addToCart(cartItems, location.state))}> Add to cart ({price})</button>
            </div>
        </div>
    )
}