import { useSelector } from "react-redux"
import { useState,useEffect } from "react"
import { CartItem } from "../../components/cart-item/cart-item.component"

 
const PurchaseAlert = ({data}) => {
     
    return(
    <div className="alert alert-dark purchaseAlert" value> {data} </div>
    )
}

export const Checkout = () => {

    const [resp, setResp] = useState();
    
    const cartItems = useSelector((state) => {return state.cart.cartItems})
    const currentUser = useSelector((state) => {return state.user.currentUser})
    console.log('currentUser ', currentUser);
 
    const dataSendMake = () => {
        const dataSend= {
        itemList: cartItems,
        user: {
            email: currentUser.email,
            name: currentUser.displayName,
        },
        deliveryAdress: document.getElementById("deliveryAdress").value
        
        }
        console.log(dataSend);
        return dataSend;
    }
    
    return (
    <div>
        {resp && <PurchaseAlert data = {resp.deliveryAdress}/>}
        {cartItems.map((item) => {return <CartItem key={item._id} item = {item}/>})} 
        <div>
        <button onClick={ 
        async () => 
        {
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
         }}>Make a purchase</button>
        </div>
        <div className="form-group col-sm-3">
        <label htmlFor="deliveryAdress"> Delivery adress</label> 
        <input type="text" id ="deliveryAdress" className="form-control"></input>
        </div>
    </div>)
}