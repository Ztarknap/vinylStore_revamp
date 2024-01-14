import { useSelector } from "react-redux"
import { useEffect } from "react"

import { CartItem } from "../../components/cart-item/cart-item.component"

export const Checkout = () => {

        //peremestit useeffect v hook
    const makePurchase = () => {
        useEffect(() => {
         
            fetch("/api/purchase/makePurchase")
            .then((res) => res.json())
            .then((data) => { console.log('aa');});
             
            }, []);
    }



    const cartItems = useSelector((state) => {return state.cart.cartItems})
    return (
    <div>
        {cartItems.map((item) => {return <CartItem key={item._id} item = {item}/>})} 
        <div>
            <button onClick={makePurchase()}>Make a purchase</button>
        </div>
    </div>)
}