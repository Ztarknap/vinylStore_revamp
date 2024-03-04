import "./cart-item-checkout.styles.scss"

export const CartItemCheckout = ({item}) => {
    const {name, image, band, genre, price, _id, quantity} = item;
     
    return(
        <div className="cart-item-checkout-position">
            <div className="checkout-position-name">{name}</div>
            <div className="checkout-position-quantity">{quantity}</div>
        </div>

    )
}