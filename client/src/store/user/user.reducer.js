import { USER_ACTION_TYPES } from "./user.types";

const INITIAL_STATE = {
    currentUserEmail: null,
    currentUserToken: null,
    currentUserTokenGoogle: null
}

export const userReducer = (state = INITIAL_STATE, action) => {
    const {type, payload} = action;
    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER: 
        if (!payload) {
            return INITIAL_STATE;
        }
        return {
            ...state,
            currentUserEmail: payload.email,
            currentUserToken: payload.token,
            currentUserTokenGoogle: payload.accessToken,
        }
        default:
            return state;
    }
}