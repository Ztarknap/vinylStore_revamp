import './item-card.styles.scss'

export const ItemCard = ( {item} ) => {
    const {name, image, band, genre, price} = item;
    return (
        <div class='item-card category-container'>
        <div className='background-image' style={{backgroundImage:`url(${image})`}}>
 
         </div>
         <div>
        {name}
        </div>
        </div>
    )
}