import { useState } from "react"
import { useLocation } from "react-router-dom"
import { useEffect } from "react";
import { Fragment } from "react";
import { ItemCard } from "../../components/item-card/item-card.component";
import {SearchForm} from "../../components/search-form/search-form.component"
import { searchItemsAPI } from "../../api/get-data.api";

export const Catalogue = () => {
    const [catalogueData, setCatalogueData] = useState([]);
    const location = useLocation()
    const searchItems =  async (obj) => {
        const data = await searchItemsAPI(obj);
        setCatalogueData(data);
    }
    useEffect(() => {
        searchItems(location.state);
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