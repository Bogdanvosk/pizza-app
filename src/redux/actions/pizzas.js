import axios from 'axios'

export const Types = {
    SET_LOADED: 'SET_LOADED',
    SET_PIZZAS: 'SET_PIZZAS'
}

export const setLoaded = payload => ({ type: Types.SET_LOADED, payload })
export const fetchPizzas = (sortBy, category) => dispatch => {
    dispatch(setLoaded(false))
    axios
        .get(
            `http://localhost:3000/pizzas?${
                category !== null ? `category=${category}` : ``
            }&_sort=${sortBy.type}&_order=${sortBy.order}`
        )
        .then(({ data }) => {
            dispatch(setPizzas(data))
        })
}

export const setPizzas = items => ({
    type: Types.SET_PIZZAS,
    payload: items
})
