export const Types = {
    SET_SORT_BY: 'SET_SORT_BY',
    SET_CATEGORY: 'SET_CATEGORY'
}

export const setSortBy = obj => ({
    type: 'SET_SORT_BY',
    payload: obj
})

export const setCategory = categoryIndex => ({
    type: 'SET_CATEGORY',
    payload: categoryIndex
})
