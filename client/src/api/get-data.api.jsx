export const searchItemsAPI = async (objSearch) => {
    const searchParams = new URLSearchParams(objSearch);
    const res = await fetch(
    "/api/items/search?"+ searchParams, 
    { 
        headers: {'Content-Type': 'application/json'}
    });
    const data = await res.json();
    return data;
}

export const getPurchaseListAPI = async (objPurchase) => {

        const res = await fetch(
        "/api/purchase/getPurchaseList",
        {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + objPurchase,
            })
        },
        )
        
        const data = await res.json();
        return data
    
}