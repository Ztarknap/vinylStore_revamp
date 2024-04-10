export type Item = {
    name: string,
    quantity: number
}

export type Category = {
    name: string,
    img: string
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