import { useEffect } from "react";
import { useSelector } from "react-redux";

export const PurchaseHistory =() => {
    const currentUserToken = useSelector((state) => state.user.currentUserToken);
    const getPurchaseList = async () => {
        const res = await fetch(
        "/api/purchase/getPurchaseList",
        {
        method: 'get',
        headers: new Headers({
            'Authorization': 'Bearer ' + currentUserToken,
        })},
        )
    
        console.log('response ,',res);
    }
    useEffect(() => {
        getPurchaseList();
    }, []);

    
    
    return (
        <div>
            PurchaseHistory
        </div>
    )
}