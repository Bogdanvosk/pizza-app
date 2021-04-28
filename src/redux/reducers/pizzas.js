import { Types } from '../actions/pizzas'

const initialState = {
    items: [],
    isLoaded: false
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_PIZZAS:
            return { ...state, items: action.payload, isLoaded: true }
        case Types.SET_LOADED:
            return { ...state, isLoaded: action.payload }
        default:
            return { ...state }
    }
}

export default filters
