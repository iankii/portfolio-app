import * as types from '../actions/actionTypes';

export default function commonReducer(state = {}, action) {
    switch(action.type) {
        case types.UPDATE_AUTHENTICATION:
            return Object.assign({}, state, {authenticated: action.payload});

        default:
            return state;
    }
}