import {
    GET_USER
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