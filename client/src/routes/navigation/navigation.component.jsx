import { Fragment } from 'react'
import {Outlet} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './navigation.styles.scss'
import { useSelector } from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-cart-outline-svgrepo-com.svg'
 
import { signOutUser } from '../../utils/firebase.util'

export const Navigation = () => {
    const current_user = useSelector((state) => state.user.currentUser);
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
         <ShoppingIcon className='shop-cart' onClick={console.log('opened')}></ShoppingIcon>
         </div>
        <Outlet/>
         </Fragment> 
    )
}