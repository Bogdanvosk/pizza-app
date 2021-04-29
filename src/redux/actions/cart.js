export const Types = {
    ADD_PIZZA_CART: 'ADD_PIZZA_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
    PLUS_CART_ITEM: 'PLUS_CART_ITEM',
    MINUS_CART_ITEM: 'MINUS_CART_ITEM'
}

export const addPizzaToCart = pizzaObj => ({
    type: Types.ADD_PIZZA_CART,
    payload: pizzaObj
})

export const clearCart = () => ({
    type: Types.CLEAR_CART
})

export const removeCartItem = id => ({
    type: Types.REMOVE_CART_ITEM,
    payload: id
})

export const plusCartItem = id => ({
    type: Types.PLUS_CART_ITEM,
    payload: id
})

export const minusCartItem = id => ({
    type: Types.MINUS_CART_ITEM,
    payload: id
})
