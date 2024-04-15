import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Purchase } from "../../components/purchase/purchase.component";
import { getPurchaseListAPI } from "../../api/get-data.api";
import "./purchase-history.styles.scss"
import { IRootState } from "../../store/root-reducer"
import { PurchaseType } from "../../utils/ts_types";

export const PurchaseHistory =() => {
    const [purchaseList, setPurchaseList] = useState([]);
    const token = useSelector((state:IRootState) => state.user.token);

    const getPurchaseList = async () => { 
        const data = await getPurchaseListAPI(token);
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
                {purchaseList.map((purchase:PurchaseType)=>   
                { return (
                    <div>
                        {<Purchase key={purchase.id} purchase = {purchase}/>}
                        <div className="separator-line-purchase"></div>       
                    </div>
                )
                }
            )} 
            </div>
        </div>
    )
}