import { removeFromCartWrap, addToCartWrap } from "../../src/store/cart/cart.action";


const itemFirstMock =
{
    "releaseDate": 1990,
    "_id": "659d2966f1c476569be87c71",
    "name": "Test1",
    "band": "Test1",
    "quantAvailable": 5,
    "price": "7000",
    "releaseYear": 1999,
    "genre": "Test1",
    "image": "https://vinyl.ru/upload/1c/pic_catalog/00-00058860/11.jpg",
    "quantity": 1
}

const itemSecondMock = 
{
    "releaseDate": 1990,
    "_id": "659d2966f1c476569be87c72",
    "name": "Test2",
    "band": "Test2",
    "quantAvailable": 5,
    "price": "7000",
    "releaseYear": 1999,
    "genre": "Test2",
    "image": "https://vinyl.ru/upload/1c/pic_catalog/00-00058860/11.jpg",
    "quantity": 1
}


const itemListMock = [ itemFirstMock, itemSecondMock];

const itemListMockFirst = [ itemFirstMock];

 
test('removeFromCartWrap, cart item removed from non-empty list', () => {
    expect(removeFromCartWrap(itemListMock, itemSecondMock)).toEqual(itemListMockFirst);
})


test('addToCartWrap, cart item added to empty list', () => {
    expect(addToCartWrap([], itemFirstMock)).toEqual(itemListMockFirst);
})

test('addToCartWrap, cart item added to non-empty list', () => {
    expect(addToCartWrap(itemListMockFirst, itemSecondMock)).toEqual(itemListMock);
})