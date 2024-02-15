import { Routes, Route } from 'react-router-dom';
import { CategoriesMain } from './categories-main.component';
export const Shop = () => {
    return (
        <Routes>
            <Route index element={<CategoriesMain/>}/>
             
        </Routes>

    )
}