import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
    const navigate = useNavigate();
    const handleSubmit = async(event) => {
        const [genre, name, band] = event.target;
        navigate("/menu", { replace: true });
        alert(genre.value, ' ', name.value, ' ', band.value);
    }
    return (
    <div>
        <form onSubmit={(event) => {handleSubmit(event)}}>
        <input type="text" id='searchGenre' name='searchGenre' className="form-control"></input>
        <input type="text" id='searchName' name='searchName' className="form-control"></input>
        <input type="text" id='searchBand' name='searchBand' className="form-control"></input>
        <button type="submit">Find albums</button>
        </form>
         
    </div>)
}