import {CategoryItem} from '../category-item/category-item.component'
import './directory.styles.scss'
import {DirectoryProps} from '../../utils/ts_types'

export const Directory = ({categories} : DirectoryProps) => {
     
    return(
    <div className='categories-container'>
        {categories.map((category) =>  <CategoryItem key = {category.id} category={category}/>  )}
    </div>)
}