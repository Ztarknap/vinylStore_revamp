export const ItemCard = (name, imageURL, band, genre, price) => {
    return (
        <div class='item-card' style={{backgroundImage: `url(${imageURL})`}}>
            {name}
        </div>
    )
}