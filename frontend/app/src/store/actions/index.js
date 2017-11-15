import {
    GET_USER,
    TOGGLE_PAGE
} from "../constants.js"

const makeActionCreator = function(actionType){
    return function(payload){
        return {
            type: actionType,
            payload: payload
        }
    };
};

export const getUser = makeActionCreator(GET_USER);
export const togglePage = makeActionCreator(TOGGLE_PAGE);