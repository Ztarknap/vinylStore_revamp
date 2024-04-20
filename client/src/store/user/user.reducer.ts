import { USER_ACTION_TYPES } from "./user.types";
import { AnyAction } from 'redux'
const INITIAL_STATE = {
    email: null,
    token: null,
    tokenGoogle: null,
    id: null
}

export const userReducer = (state = INITIAL_STATE, action = ({} as AnyAction)) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
        if (!payload) {
            return INITIAL_STATE;
        }
        return {
            ...state,
            email: payload.email,
            token: payload.token,
            tokenGoogle: payload.accessToken,
            id: payload.id,
        }
        default:
            return state;
    }
}