import {CategoryItem} from '../category-item/category-item.component'
import './directory.styles.scss'
import {DirectoryPropsType} from '../../utils/ts_types'

export const Directory = ({categories} : DirectoryPropsType) => {
     
    return(
    <div className='categories-container'>
        {categories.map((category) =>  <CategoryItem key = {category.id} category={category}/>  )}
    </div>)
}