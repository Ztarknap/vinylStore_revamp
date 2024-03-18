import { Fragment} from "react"
import {Directory} from '../../components/directory/directory.component'
import {categories} from '../../utils/categories_const'
import { SearchForm } from '../../components/search-form/search-form.component';

export const Home = () => {
   
return (
    <Fragment>
    <SearchForm/>
    <Directory categories = {categories}/>
    </Fragment>
)
}