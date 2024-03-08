import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Purchase } from "../../components/purchase/purchase.component";
import "./purchase-history.styles.scss"

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
        <div className="purchase-list">
            <div className="purchase-header">
            <div className="purchase-header-name">Name</div>
            <div className="purchase-header-delivery"> Delivery address</div>
            </div>
            <div className="separator-line-purchase"></div> 
             {purchaseList.map((purchase)=> 
                
            { 
                return (
            <div>
            {<Purchase key={purchase.id} purchase = {purchase}/>}
            <div className="separator-line-purchase"></div>       
            </div>
            )}
        )} 
        </div>
        </div>
    )
}