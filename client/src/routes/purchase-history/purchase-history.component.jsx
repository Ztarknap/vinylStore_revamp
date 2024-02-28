import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

export const PurchaseHistory =() => {
    const [purchaseList, setPurchaseList] = useState([]);
    const token = useSelector((state) => state.user.token);
    console.log(purchaseList, ' purchaseList');
    const getPurchaseList = async () => {
        const res = await fetch(
        "/api/purchase/getPurchaseList",
        {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + token,
        })},
        )
        
        
        const data = await res.json();
        console.log('response ,',data);
        if (data.status == 0 ) { 
            setPurchaseList(data.purchaseList);
    }
    }
    useEffect(() => {
        getPurchaseList();
    }, []);

 
    
    return (
        <div>
            {purchaseList.map((purchase)=> 
                
            { 
                return (
            <div>
            {purchase.map((item) => {
                return (
                    item
                )
            })}

            </div>
            )}
             )}
        </div>
    )
}