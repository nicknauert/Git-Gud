import axios from "axios";
import {
    getUser
} from "./store/actions/index.js"


export function getUserService( user ) {
    return dispatch => {
        axios.get('http://localhost:4000/users/' + user).then( res => {
            console.log("Dispatching post-thunk");
            dispatch(getUser(res.data))
        })
    }
}