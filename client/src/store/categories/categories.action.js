import { CATEGORIES_ACTION_TYPES } from "./categories.types"
import {createAction} from '../../utils/reducer/reducer.utils'



export const setCategories = (categories) => {
    return createAction('SET_CATEGORIES', categories);
}