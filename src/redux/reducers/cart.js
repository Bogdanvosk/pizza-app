import { Types } from '../actions/cart'

const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

// Аналог функции _.get из библиотеки lodash
const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.')

    return keys.reduce((val, key) => {
        return val[key]
    }, obj[firstKey])
}

// Функция подсчета количества товаров в корзине или итоговой суммы
const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path)
        return sum + value
    }, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case Types.ADD_PIZZA_CART: {
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case Types.REMOVE_CART_ITEM: {
            const newItems = {
                ...state.items
            }

            const currentTotalPrice = newItems[action.payload].totalPrice

            const currentTotalCount = newItems[action.payload].items.length

            delete newItems[action.payload]
            return {
                ...state,
                items: newItems,
                totalPrice: state.totalPrice - currentTotalPrice,
                totalCount: state.totalCount - currentTotalCount
            }
        }

        case Types.PLUS_CART_ITEM: {
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ]

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case Types.MINUS_CART_ITEM: {
            const oldObjItems = [...state.items[action.payload].items]

            const newObjItems =
                oldObjItems.length > 1 ? oldObjItems.slice(1) : oldObjItems

            const newItems = {
                ...state.items,
                [action.payload]: {
                    items: newObjItems,
                    totalPrice: getTotalPrice(newObjItems)
                }
            }

            const totalCount = getTotalSum(newItems, 'items.length')
            const totalPrice = getTotalSum(newItems, 'totalPrice')

            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice
            }
        }

        case Types.CLEAR_CART:
            return { ...state, items: {}, totalCount: 0, totalPrice: 0 }

        default:
            return { ...state }
    }
}

export default cart
