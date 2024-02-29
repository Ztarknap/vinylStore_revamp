import { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './navigation.styles.scss'
import {   useSelector } from 'react-redux'

import {CartIcon} from '../../components/cart-icon/cart-icon.component'
import {CartDropdown} from '../../components/cart/cart-dropdown.component'
import { auth} from '../../utils/firebase.util'
import { persistor } from "../../store/store"
import { setCurrentUser } from "../../store/user/user.action"
import { useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import {useState} from 'react'

export const Navigation = () => {
    const email = useSelector((state) => state.user.email);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    
    const navigate = useLocation();
    const [currentRoute, setCurrentRoute] = useState();
    const dispatch = useDispatch();
    
    
 
    const signOutUser = async() => 
    {
      await signOut(auth);
      dispatch(setCurrentUser(null));
      await persistor.purge();
       
       
    }

    return(
        <Fragment>
         
        <div className='navigation-bar'>
        <Link to='/home' className={"navlink " + (navigate.pathname =='/home'?"current_route":"")} > Home </Link>
         <Link to='/shop' className={"navlink " + (navigate.pathname =='/shop'?"current_route":"")}> Browse</Link>
         {/*signout if logged, sign in if not */}
         {(email? 
            (<Link onClick={signOutUser} className='navlink'> Sign Out </Link>):
            (<Link to='/sign_in' className={"navlink " + (navigate.pathname =='/sign_in'?"current_route":"")}>  Sign in</Link>) )}
          
         <Link to='/sign_up' className={"navlink " + (navigate.pathname =='/sign_up'?"current_route":"")}> Sign up</Link>
         <Link to='/contact' className={"navlink " + (navigate.pathname =='/contact'?"current_route":"")}> Contact information </Link>
         {email}
         {/*show purchase history if logged in*/}
         {(email?
            (<Link to='/purchaseHistory' className={"navlink " + (navigate.pathname =='/purchaseHistory'?"current_route":"")}> Purchase history</Link>):
            '')}
         <CartIcon/>  
         {isCartOpen && <CartDropdown/>}
         </div>
        <Outlet/>
         </Fragment> 
    )
}