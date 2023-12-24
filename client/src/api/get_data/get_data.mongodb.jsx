
export const getItemData = () => {
    console.log('getting data');      
   useEffect(() => {
    fetch("/api/items")
    .then((res) => res.json())
    .then((data) => { console.log(data); return data});
  }, []) 
}