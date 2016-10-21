import axios from "axios";
import { connect } from "react-redux"

export function fetchAdventures() {
    return function(dispatch) {
        axios.get("http://lukepeters.me/api/adventure-options/")
            .then((response) => {
                dispatch({
                    type: "FETCH_ADVENTURES_FULFILLED",
                    payload: response.data
                })
            })
            .catch((err) => {
                dispatch({
                    type: "FETCH_ADVENTURES_REJECTED",
                    payload: err
                })
            })
    }
}


