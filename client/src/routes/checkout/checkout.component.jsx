import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { CartItemCheckout } from "../../components/cart-item-checkout/cart-item-checkout.component"
import "./checkout.styles.scss"
import "../../style-common/elements.styles.scss"
 
const PurchaseAlert = ({data}) => {
     
    return(
    <div className="alert alert-dark purchaseAlert" value> {data} </div>
    )
}

export const Checkout = () => {
    const [resp, setResp] = useState();
 

    const cartItems = useSelector((state) => {return state.cart.cartItems})
    const currentId = useSelector((state) => {return state.user.id})
     
 

    const dataSendMake = () => {
        const dataSend= {
        itemList: cartItems,
        id: currentId,
        deliveryAdress: document.getElementById("deliveryAdress").value
        
        }
        console.log(dataSend);
        return dataSend;
    }
    
    return (
    <div className="checkout-info">
        <div className="separator-line"></div>
        {resp && <PurchaseAlert data = {resp.deliveryAdress}/>}
        {cartItems.map((item) => {return <CartItemCheckout key={item._id} item = {item}/>})} 
        <div className="separator-line"></div>
        <div>
        <label htmlFor="deliveryAdress"> Delivery adress</label> 
        <input type="text" id ="deliveryAdress" className="form-control"></input>
        <div>
        <button className="btn-common-primary" onClick={ 
        async () => 
            {
                console.log('currentId ,', currentId);
                if(!currentId) {
                    alert('You need to be logged in to confirm puchase.');
                    return;
                }

            const res = await fetch("/api/purchase/makePurchase", 
            {
                method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataSendMake()),})
            const data = await res.json();
            console.log('got answer ', data);
            <div class="alert alert-light" role="alert">
            Succesfully bought, address - {data.deliveryAdress}
            </div>
            setResp(data);
            }}>Confirm</button>
        </div>
        </div>
    </div>)
}