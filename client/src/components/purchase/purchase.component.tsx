import "./purchase.styles.scss"
import {PurchasePropsType} from "../../utils/ts_types"

export const Purchase = ({purchase}: PurchasePropsType) => {
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