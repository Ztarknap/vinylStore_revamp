import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { useNavigate} from "react-router-dom";
import {ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { CartItemCheckout } from "../../components/cart-item-checkout/cart-item-checkout.component"
import { makePurchaseAPI } from "../../api/post-data.api"
import { clearCart, setCartIsOpen } from "../../store/cart/cart.action"
import "./checkout.styles.scss"
import "../../style-common/elements.styles.scss"

 

export const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => {return state.cart.cartItems})
    const isCartOpen = useSelector((state) => {return state.cart.isCartOpen})
    const currentId = useSelector((state) => {return state.user.id})

    useEffect(() => {
    dispatch(setCartIsOpen(isCartOpen))
    }, [])
    
    const purchaseDataMake = () => {
        const cartItemsIds = cartItems.map((elem) => {return elem._id})
        const dataSend= {
        itemList: cartItemsIds,
        id: currentId,
        deliveryAdress: document.getElementById("deliveryAdress").value
        
        }
        return dataSend;
    }

    const makePurchase =  async () => {
        if(!currentId) {
            alert('You need to be logged in to confirm puchase.');
            return;
        }

        const data = await makePurchaseAPI(purchaseDataMake());
        if (data.status == 0) {
            toast("Purchase succesfull, redirecting", {
                theme: "dark",
                onClose: () => { navigate("/purchaseHistory", { replace: true})}
            });
            dispatch(clearCart());
            document.getElementById('deliveryAdress').value = '';

        }
        else {
            toast("Error purchasing, please try again", {
                theme: "dark"
            });
        }
         
         
    }
    
    return (
    <div className="checkout-info">
        <div>
        <ToastContainer />
        </div>
        <div className="separator-line"></div>
        {cartItems.map((item) => {return <CartItemCheckout key={item._id} item = {item}/>})} 
        <div className="separator-line"></div>
        <div>
        <label htmlFor="deliveryAdress"> Delivery adress</label> 
        <input type="text" id ="deliveryAdress" className="form-control"></input>
        <div>
        <button className="btn-common-primary" onClick={ 
        async () => { makePurchase();}}>Confirm</button>
        </div>
        </div>
    </div>)
}