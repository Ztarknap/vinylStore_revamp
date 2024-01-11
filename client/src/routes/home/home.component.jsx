import { Fragment, useEffect } from "react"
import {Directory} from '../../components/directory/directory.component'
import { getItemData } from "../../api/get_data/get_data.mongodb";
import {categories} from '../../utils/categories_const'

export const Home = () => {
    console.log("HOME!!!");
     

    
return (
    <Fragment>
   <Directory categories = {categories}/>
    </Fragment>
)
}