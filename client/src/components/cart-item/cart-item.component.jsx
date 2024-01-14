import { useSelector } from "react-redux";

export const CartItem = ({item}) => {
    const {name, image, band, genre, price, _id, quantity} = item;
     
    return(
        <div className="row">
            <span className="col-sm-6">{name}</span>
            <span className="col-sm-4"></span>
            <span className="col-sm-2">{quantity}</span>
        </div>
    )
}