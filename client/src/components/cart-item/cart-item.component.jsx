import "./cart-item.styles.scss"

export const CartItem = ({item}) => {
    const {name, image, band, genre, price, _id, quantity} = item;
     
    return(
        <div className="cart-item-position">
            <span className="">{name}</span>
            <span className="">{quantity}</span>
        </div>

    )
}