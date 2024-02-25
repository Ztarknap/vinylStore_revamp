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
import { signOut } from 'firebase/auth'

export const Navigation = () => {
    const currentUserEmail = useSelector((state) => state.user.currentUserEmail);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
 
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
        <Link to='/home' className='navlink'> Home </Link>
         <Link to='/shop' className='navlink'> Browse</Link>
         {/*signout if logged, sign in if not */}
         {(currentUserEmail? 
            (<Link onClick={signOutUser} className='navlink'> Sign Out </Link>):
            (<Link to='/sign_in' className='navlink'>  Sign in</Link>) )}
          
         <Link to='/sign_up' className='navlink'> Sign up</Link>
         <Link to='/contact' className='navlink'> Contact information </Link>
         {currentUserEmail}
         {/*show purchase history if logged in*/}
         {(currentUserEmail?
            (<Link to='/purchaseHistory' className='navlink'> Purchase history</Link>):
            '')}
         <CartIcon/>  
         {isCartOpen && <CartDropdown/>}
         </div>
        <Outlet/>
         </Fragment> 
    )
}