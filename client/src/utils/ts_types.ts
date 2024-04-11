export type Item = {
    _id: string,
    name: string,
    quantity: number
}

 
 
export type Category = {
    id: string,
    name: string,
    img: string
}

export type ItemDetailed = {
    name: string,
    image: string,
    band: string,
    ganere: string,
    price: string,
    releaseDate: string,
    quantAvailable: number,
    _id: string 
}

export type DirectoryProps = {
    categories: Category[]
}
export type Purchase = {
    itemList: string[],
    user_id: string,
    deliveryAdress: string
}

export type CategoryItemProps = {
    category: Category
}

export type CartItemProps = {
    item: Item
}

export type PurchaseProps = {
    purchase: Purchase;
}