 export const makePurchaseAPI = async (objPurchase) => {
    const res = await fetch("/api/purchase/makePurchase", 
    {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(objPurchase),
    })
    const data = await res.json();
    return data;
 }


 export const signInAPI = async (objUser) => {
    let res = await fetch("api/user/signin", 
    {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objUser),
        
    });
    const data = await res.json();
    return data;
 }


 export const signUpAPI = async(objUser) => {

    const res = await fetch("/api/user/signup",
    { 
        method: "POST", 
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(objUser),
    }
    );
    const data = await res.json();

    return data;
 }