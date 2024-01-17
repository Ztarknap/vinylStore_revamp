import { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './navigation.styles.scss'
import { useSelector } from 'react-redux'

import {CartIcon} from '../../components/cart-icon/cart-icon.component'
import {CartDropdown} from '../../components/cart/cart-dropdown.component'
import { signOutUser } from '../../utils/firebase.util'

export const Navigation = () => {
    const current_user = useSelector((state) => state.user.currentUser);
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
    return(
        <Fragment>
        <div className='navigation-bar'>
        <Link to='/home' className='navlink'> Home </Link>
         <Link to='/shop' className='navlink'> Browse</Link>
         {(current_user? 
            (<Link onClick={signOutUser} className='navlink'> Sign Out </Link>):
            (<Link to='/sign_in' className='navlink'>  Sign in</Link>) )}
          
         <Link to='/sign_up' className='navlink'> Sign up</Link>
         <Link to='/contact' className='navlink'> Contact information </Link>
         {(current_user?
            (<Link to='/purchaseHistory' className='navlink'> Purchase history</Link>):
            '')}
         <CartIcon/>  
         {isCartOpen && <CartDropdown/>}
         </div>
        <Outlet/>
         </Fragment> 
    )
}