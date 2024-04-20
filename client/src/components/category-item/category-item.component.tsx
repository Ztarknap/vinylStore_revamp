import './category-item.styles.scss'
import { useNavigate } from "react-router-dom";
import {CategoryItemPropsType} from '../../utils/ts_types'


export const CategoryItem = ({category}: CategoryItemPropsType) => {
    const {name, img} = category;
    const navigate = useNavigate();
    const searchGenre = (genre: string) => {
        navigate("/catalogue", { replace: true, state: {genre: genre} });
    }
 
    return (
    <div className='category-container'>
        
        <div className='background-image' onClick={() => {searchGenre(name)}} style={{backgroundImage:`url(${img})`}}>
        </div>
        <div className='category-body-container'>
            <h1>{name}</h1> 
        </div>

    </div>)
}