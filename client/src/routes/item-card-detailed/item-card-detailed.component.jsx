import { useLocation } from "react-router-dom";

export const ItemCardDetailed =() => {
    const location = useLocation()
    console.log(location.state);
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