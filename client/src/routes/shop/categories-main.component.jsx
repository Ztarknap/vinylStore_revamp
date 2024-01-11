import { useContext, Fragment, useEffect } from 'react'
import { ItemCard } from '../../components/item-card/item-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';
import './categories-main.styles.scss'
 

export const CategoriesMain = () => {
    const genresList = ['Rock','Pop','Jazz','Classical','Hip_hop'];
    const categoriesData = useSelector((state) =>  state.categories.categoriesData )
    const dispatch = useDispatch();
    useEffect(() => {
         
      fetch("/api/items")
      .then((res) => res.json())
      .then((data) => { console.log(data); dispatch(setCategories(data));});
       
      }, []);
      console.log('Object.keys(categoriesData)', Object.keys(categoriesData));
            console.log(' categorr', categoriesData);
      return (
        <Fragment>
           
            {  
             genresList.map((genre) => 
             { 
              console.log(categoriesData, 'C-D'); 
              return( 
              <div> 
                <span className='genreTitle'> 
                <h1>{genre}</h1> 
                </span>
                <div className='items-list'> 
             {categoriesData.map((obj) => 
             {
              if (genre === obj.genre) 
              {
                return (
                 
                  <ItemCard key = {obj.id} item = {obj} ></ItemCard>
                  
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