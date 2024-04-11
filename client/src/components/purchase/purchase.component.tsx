import "./purchase.styles.scss"
import {PurchaseProps} from "../../utils/ts_types"

export const Purchase = ({purchase}: PurchaseProps) => {
    return(
        <div>
            <div className="purchase">  
                <div className="purchase-items">
                    {purchase.itemList.map((item) => {return (<div>{item}</div>)})}
                </div>
                <div className="purchase-delivery"> 
                    {purchase.deliveryAdress}
                </div>
            </div>
        </div>
    )
}