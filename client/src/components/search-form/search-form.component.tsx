import { useNavigate} from "react-router-dom";
import "./search-form.styles.scss"


export const SearchForm = () => {
    const navigate = useNavigate();
    const handleSearchClick = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
 
        const genre =  event.currentTarget.elements[0] as HTMLInputElement;
        const name =  event.currentTarget.elements[1] as HTMLInputElement;
        const band =  event.currentTarget.elements[2] as HTMLInputElement;
 
        navigate("/catalogue", { replace: true, state: {genre: genre.value, name: name.value, band: band.value} }); 
    }
    return (
    <div className="searchBlock">
            <form onSubmit={(event) => {handleSearchClick(event)}}>
                <input type="text" id='searchGenre' name='searchGenre' className="form-control searchField input-field-primary" placeholder="Genre"></input>
                <input type="text" id='searchName' name='searchName' className="form-control searchField input-field-primary" placeholder="Album name"></input>
                <input type="text" id='searchBand' name='searchBand' className="form-control searchField input-field-primary" placeholder="Band"></input>
                <button type="submit" className="btn-common-primary">Find albums</button>
            </form>
         
    </div>)
}