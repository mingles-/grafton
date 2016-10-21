export default function reducer(state = {
    adventures: [],
    fetching: false,
    fetched: false,
    error: null,
}, action) {

    switch (action.type) {
        case "FETCH_ADVENTURES":
            {
                return {...state,
                    fetching: true
                }
            }
        case "FETCH_ADVENTURES_REJECTED":
            {
                return {...state,
                    fetching: false,
                    error: action.payload
                }
            }
        case "FETCH_ADVENTURES_FULFILLED":
            {
                return {
                    ...state,
                    fetching: false,
                    fetched: true,
                    adventures: action.payload,
                }
            }
    }
    return state
}
