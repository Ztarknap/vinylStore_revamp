import { useEffect } from "react";




export const getItemData = () => {
    console.log('getting data');      
 
    fetch("/api/items")
    .then((res) => res.json())
    .then((data) => { console.log(data); return data});
   
}