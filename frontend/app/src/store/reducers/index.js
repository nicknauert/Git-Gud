import {
    GET_USER,
    TOGGLE_PAGE
} from "../constants.js"
import update from "immutability-helper";

const initialState = {
    user: {},
    dash: true
};

const reducers = ( state = initialState, action ) => {
    switch (action.type){
        case GET_USER:
            return update( state, { user: { $set: action.payload}});

        case TOGGLE_PAGE:
            return update( state, { dash: { $set: !state.dash}});

        default:
            return state
    }
}

export default reducers

