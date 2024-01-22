import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { Fragment } from "react";
import { ItemCard } from "../../components/item-card/item-card.component";
import {SearchForm} from "../../components/search-form/search-form.component"

export const Catalogue = () => {
    const [catalogueData, setCatalogueData] = useState([]);
    const location = useLocation()
    const getItemDataAPI =  async (obj) => {
        const searchParams = new URLSearchParams(obj);
        const res = await fetch("/api/items/search?"+ searchParams, { headers: {'Content-Type': 'application/json'}});
        const data = await res.json();
        setCatalogueData(data);
         
    }
    useEffect(() => {
        console.log('useEffect');
        getItemDataAPI(location.state);
    },[location.state])
     
 
    return(
        <Fragment>
        <SearchForm></SearchForm>
                <div className='items-list'> 
             {catalogueData.map((obj) => 
             {
  
                return (
                 
                  <ItemCard key = {obj._id} item = {obj} ></ItemCard>
                  
                )
 
             })
             }
             </div>      
        </Fragment>
    )
}