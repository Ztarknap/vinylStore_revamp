import logo from './logo.svg';
import './App.css';
//libs
import {useEffect, useState}from 'react'
import {Routes, Route} from 'react-router-dom';


//react components
import { Navigation } from './routes/navigation/navigation.component';
import { Home } from './routes/home/home.component';
import {Shop} from './routes/shop/shop.component';
import { Contact } from './routes/contact/contact.component';
import { SignIn } from './routes/sign_in/sign_in.component';
import { SignUp } from './routes/sign_up/sign_up_component';
import { Checkout } from './routes/checkout/checkout.component';
import {onAuthStateChangedListener} from './utils/firebase.util';
import {setCurrentUser} from './store/user/user.action';
import { PurchaseHistory } from './routes/purchase-history/purchase-history.component';
//redux
import { useDispatch } from 'react-redux';
 

function App() {

  const dispatch = useDispatch();

  useEffect(()=> {
    const unsubscribe = onAuthStateChangedListener((user) => {
        dispatch(setCurrentUser(user));
 
    });
        return unsubscribe;
  }); 

  return (
     <Routes>
      <Route path='/' element = {<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element = {<Home/>}/> 
      <Route path='/shop' element = {<Shop/>}/>
      <Route path='/contact' element = {<Contact/>}/>
      <Route path='/sign_in' element = {<SignIn/>}/>
      <Route path='/sign_up' element = {<SignUp/>}/>
      <Route path='/checkout' element ={<Checkout/>}/>
      <Route path='/purchaseHistory' element = {<PurchaseHistory/>}/>

      </Route>
     </Routes>
  )
}

export default App;
