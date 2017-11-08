import {
    GET_USER
} from "../constants.js"
import update from "immutability-helper";

const initialState = {
    user: {}
};

const reducers = ( state = initialState, action ) => {
    switch (action.type){
        case GET_USER:
            return update( state, { user: { $set: action.payload}});
        
        default:
            return state
    }
}

export default reducers

