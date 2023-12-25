import { Fragment, useEffect } from "react"
import {Directory} from '../../components/directory/directory.component'
import { getItemData } from "../../api/get_data/get_data.mongodb";

export const Home = () => {
    console.log("HOME!!!");
    const categories = [
        {
          id: 1,
          name: 'Rock',
          img: 'https://vinyl.ru/upload/1c/pic_catalog/00-00044488/1.jpg',
        },
        {
          id: 2,
          name: 'Rap',
          img: 'https://vinyl.ru/upload/1c/pic_catalog/00-00058859/11.jpg'

        },
        {
          id: 3,
          name: 'Classic',
          img: 'https://vinyl.ru/upload/1c/pic_catalog/00-00059539/0.jpg'
        },
        {
          id: 4,
          name: 'Pop',
          img: 'https://vinyl.ru/upload/1c/pic_catalog/00-00053900/1.jpg'
        },
        {
          id: 5,
          name: 'Jazz',
          img: 'https://vinyl.ru/upload/1c/pic_catalog/00-00059454/0.jpg'
        },
      ]

    
return (
    <Fragment>
   <Directory categories = {categories}/>
    </Fragment>
)
}