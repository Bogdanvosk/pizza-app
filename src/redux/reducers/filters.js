import { Types } from '../actions/filters'

const initialState = {
    category: null,
    sortBy: {
        type: 'rating',
        order: 'desc'
    }
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case Types.SET_SORT_BY:
            return { ...state, sortBy: action.payload }
        case Types.SET_CATEGORY:
            return { ...state, category: action.payload }

        default:
            return { ...state }
    }
}

export default filters
