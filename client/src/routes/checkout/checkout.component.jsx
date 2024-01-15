import { useSelector } from "react-redux"
import { useEffect } from "react"
import { useState } from "react"
import { CartItem } from "../../components/cart-item/cart-item.component"


//ploho, zasunut v useEffect s sobitiem
 const MakePurchase = () => {
    const [resp, setResp] = useState();
    useEffect(() => {
         
        fetch("/api/purchase/makePurchase")
        .then((res) => res.json())
        .then((data) => { setResp(data)});
        }, []);
    return resp;
}
export const Checkout = () => {

         
     



    const cartItems = useSelector((state) => {return state.cart.cartItems})
    return (
    <div>
        {cartItems.map((item) => {return <CartItem key={item._id} item = {item}/>})} 
        <div>
            <button onClick={() => MakePurchase()}>Make a purchase</button>
        </div>
    </div>)
}