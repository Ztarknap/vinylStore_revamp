import logo from './logo.svg';
import './App.css';
//libs
import {useEffect, useState}from 'react'
import {Routes, Route} from 'react-router-dom';

//react components
import { Navigation } from './routes/navigation/navigation.component';
import { Home } from './routes/home/home.component';
import {Shop} from './routes/shop/shop.component';

function App() {
  //const [data, setData] = useState(null);
  //useEffect(() => {
  /*{data.map((elem)=> <div>{elem}</div>)}*/
 /*   fetch("/api")
    .then((res) => res.json())
    .then((data) => {setData(data.message); console.log(data.message);});
  })*/


  return (
     <Routes>
      <Route path='/' element = {<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/home' element = {<Home/>}/> 
      <Route path='/shop' element = {<Shop/>}/>

      </Route>
     </Routes>
  )
}

export default App;
