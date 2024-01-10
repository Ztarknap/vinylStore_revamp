import { useContext, Fragment, useEffect } from 'react'
import { ItemCard } from '../../components/item-card/item-card.component';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories } from '../../store/categories/categories.action';

export const CategoriesMain = () => {
    const genresList = ['Rock','Pop','Jazz','Classical','Hip hop'];
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
             genresList.map((genre) => { console.log(categoriesData, 'C-D'); return(categoriesData{genre})}) 
              //todo: dodumat kak vivodit po genre
            }
          
  
   
        </Fragment>
      )
    }