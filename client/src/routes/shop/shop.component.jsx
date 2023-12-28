import {getItemData} from '../../api/get_data/get_data.mongodb'
import { useEffect } from 'react'

export const Shop = () => {
    return (
        <div> 
         
            shop
        
       
        <button onClick={getItemData}> get data</button>
        
        </div>
    )
}