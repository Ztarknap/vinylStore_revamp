import { useState } from "react"
import { useLocation } from "react-router-dom"

export const Catalogue = () => {
    const [catalogueData, setCatalogueData] = useState();
    const getItemDataAPI =  async (obj) => {
         
        const searchParams = new URLSearchParams(obj);
        const res = await fetch("/api/search/"+ searchParams, { headers: {'Content-Type': 'application/json'}});
        const data = await res.json();
        setCatalogueData(data);
         
    }
    {console.log('catalogueData');}
    {console.log(catalogueData)}
    const location = useLocation()
    getItemDataAPI(location.state);
    return(
        <div>
        adadsa
        </div>
    )
}