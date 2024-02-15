import { useLocation } from "react-router-dom";

export const ItemCardDetailed =() => {
    const location = useLocation()
    const {name, image, band, genre, price, releaseDate, quantAvailable} = location.state;
    
    return (
        <div>
            {name}
            {image}
            {band} 
            {genre} 
            {price} 
            {releaseDate}
            {quantAvailable}
      
        </div>
    )
}