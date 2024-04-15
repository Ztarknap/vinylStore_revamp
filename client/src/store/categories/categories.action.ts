import {createAction} from '../../utils/reducer/reducer.utils'
import {CategoryType} from '../../utils/ts_types'


export const setCategories = (categories:CategoryType[]) => {
    return createAction('SET_CATEGORIES', categories);
}