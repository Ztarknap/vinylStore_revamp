import "./purchase.styles.scss"

export const Purchase = ({purchase}) => {
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