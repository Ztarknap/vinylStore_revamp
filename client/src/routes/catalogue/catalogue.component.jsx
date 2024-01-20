import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";

export const Catalogue = () => {
    const [catalogueData, setCatalogueData] = useState([]);
    const location = useLocation()
    const getItemDataAPI =  async (obj) => {
         
        const searchParams = new URLSearchParams(obj);
        const res = await fetch("/api/items/search?"+ searchParams, { headers: {'Content-Type': 'application/json'}});
        const data = await res.json();
        console.log('data ', data);
        setCatalogueData(data);
         
    }
    useEffect(() => {
        getItemDataAPI(location.state);
        console.log('ctd ',catalogueData);
    },[])
     
 
    return(
        <div>
        {catalogueData.map((item) => {return (<div>{item.name}</div>)})}
        </div>
    )
}