export const searchItemsAPI = async (obj) => {
    const searchParams = new URLSearchParams(obj);
    const res = await fetch("/api/items/search?"+ searchParams, { headers: {'Content-Type': 'application/json'}});
    const data = await res.json();
    return data;
}

