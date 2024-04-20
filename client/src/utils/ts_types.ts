export type ItemType = {
    _id: string,
    name: string,
    quantity: number
}

 
export type CategoryType = {
    id: string,
    name: string,
    img: string
}

export type ItemInfoType = {
    name: string,
    band: string,
    quantAvailable: number,
    price: string,
    releaseDate: string,
    genre: string,
    image: string,
    _id: string 
}

export type SearchParamsType = {
    genre: string,
    name: string,
    band: string
}
export type PurchaseType = {
    itemList: string[],
    id: string,
    deliveryAdress: string
}


export type UserType = {
    email: string
    token: string,
    accessToken: string | null,
    id: string
} | null






 
export type DirectoryPropsType = {
    categories: CategoryType[]
}
 

export type CategoryItemPropsType = {
    category: CategoryType
}

export type CartItemPropsType = {
    item: ItemType
}

export type PurchasePropsType = {
    purchase: PurchaseType;
}

export type ItemInfoPropsType = {
    item: ItemInfoType;
}