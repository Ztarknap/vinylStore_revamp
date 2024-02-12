import { useNavigate, useLocation } from "react-router-dom";
import "./search-form.styles.scss"

export const SearchForm = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const handleSubmit = async(event) => {
        event.preventDefault();
        const [genre, name, band] = event.target;
        navigate("/catalogue", { replace: true, state: {genre: genre.value, name: name.value, band: band.value} });
         
    }
    return (
    <div className="searchBlock">
        <form onSubmit={(event) => {handleSubmit(event)}}>
        <input type="text" id='searchGenre' name='searchGenre' className="form-control searchField" placeholder="Genre"></input>
        <input type="text" id='searchName' name='searchName' className="form-control searchField" placeholder="Album name"></input>
        <input type="text" id='searchBand' name='searchBand' className="form-control searchField" placeholder="Band"></input>
  
        <button type="submit" className="btn-common-primary">Find albums</button>
 
        </form>
         
    </div>)
}