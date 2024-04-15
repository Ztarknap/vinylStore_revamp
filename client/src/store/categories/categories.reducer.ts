import { CATEGORIES_ACTION_TYPES } from "./categories.types";
import { AnyAction } from 'redux'
const INITIAL_STATE = {
    categoriesData: []
}

export const categoriesReducer = (state = INITIAL_STATE, action = ({} as AnyAction)) => {
    const {type, payload} = action;
    switch(type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return {
                categoriesData: payload
            }
        default:
            return state
    }
}