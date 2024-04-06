import "./cart-item.styles.scss"

export const CartItem = ({item}) => {
    const {name, quantity} = item;
     
    return(
        <div className="cart-item-position">
            <span className="">{name}</span>
            <span className="">{quantity}</span>
        </div>

    )
}