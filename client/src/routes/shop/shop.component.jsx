import {getItemData} from '../../api/get_data/get_data.mongodb'
import { useEffect } from 'react'
import { useState } from 'react';

export const Shop = () => {
    console.log('albumData11easdsadsad'   );
    const [data, setData] =  useState(null);
    useEffect(() => {
         
        fetch("/api/items")
        .then((res) => res.json())
    .then((data) => { console.log(data); setData(data)});
        console.log('albumData', data);
    }, []);
    return (
        <div> 
         
        
       
        <button onClick={getItemData}> get data</button>
        
        </div>
    )
}