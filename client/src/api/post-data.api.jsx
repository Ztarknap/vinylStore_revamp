 export const makePurchaseAPI = async (objPurchase) => {
    const res = await fetch("/api/purchase/makePurchase", 
    {
        method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(objPurchase),})
    const data = await res.json();
    return data;
 }