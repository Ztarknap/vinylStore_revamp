import {  Fragment, useEffect } from 'react'
import { ItemCard } from '../../components/item-card/item-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';
import './categories-main.styles.scss'
import { IRootState } from "../../store/root-reducer"
import {ItemInfoType} from "../../utils/ts_types"

export const CategoriesMain = () => {
    const genresList = ['Rock','Pop','Jazz','Classical','Hip_hop'];
    const categoriesData = useSelector((state: IRootState) =>  state.categories.categoriesData )
    const dispatch = useDispatch();
    useEffect(() => {
         
      fetch("/api/items")
      .then((res) => res.json())
      .then((data) => { console.log(data); dispatch(setCategories(data));});
       
      }, []);
      return (
        <Fragment>
            {  
             genresList.map((genre) => 
             { 
              return( 
              <div> 
                <span className='genreTitle'> 
                <h1>{genre}</h1> 
                </span>
                <div className='items-list'> 
             {categoriesData.map((obj:ItemInfoType) => 
             {
              if (genre === obj.genre) 
              {
                return (
                 
                  <ItemCard key = {obj._id} item = {obj} ></ItemCard>
                  
                )
              }
             })
             }
             </div>
             </div>) 
               
            })
           
          }
  
          
        </Fragment>
      )
    }