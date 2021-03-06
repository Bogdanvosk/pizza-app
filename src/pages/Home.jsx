/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Categories,
    SortPopup,
    PizzaBlock,
    PizzaLoadingBlock
} from '../components'
import PropTypes from 'prop-types'
import { setCategory, setSortBy } from '../redux/actions/filters'
import { fetchPizzas } from '../redux/actions/pizzas'
import { addPizzaToCart } from '../redux/actions/cart'

const categoryNames = [
    'Мясные',
    'Вегетарианские',
    'Гриль',
    'Острые',
    'Закрытые'
]

const sortItems = [
    { name: 'популярности', type: 'rating', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавиту', type: 'name', order: 'asc' }
]

const Home = () => {
    const pizzas = useSelector(({ pizzas }) => pizzas.items)
    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded)
    const { category, sortBy } = useSelector(({ filters }) => filters)
    const cartItems = useSelector(({ cart }) => cart.items)

    const dispatch = useDispatch()

    React.useEffect(() => {
        dispatch(fetchPizzas(sortBy, category))
    }, [sortBy, category])

    // Функция не будет пересоздаваться при ререндере (useCallback)
    const onSelectCategory = React.useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    const onSelectSortType = React.useCallback(type => {
        dispatch(setSortBy(type))
    }, [])

    const handleAddPizza = obj => {
        dispatch(addPizzaToCart(obj))
    }

    return (
        <div className='container'>
            <div className='content__top'>
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <SortPopup
                    onClickSortType={onSelectSortType}
                    items={sortItems}
                    activeSortType={sortBy.type}
                />
            </div>
            <h2 className='content__title'>
                {category === null ? 'Все' : categoryNames[category]} пиццы
            </h2>
            <div className='content__items'>
                {isLoaded
                    ? pizzas.map(pizza => (
                          <PizzaBlock
                              addedCount={
                                  cartItems[pizza.id] &&
                                  cartItems[pizza.id].items.length
                              }
                              key={pizza.id}
                              onClickAddPizza={handleAddPizza}
                              {...pizza}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    )
}

export default Home

Home.propTypes = {
    pizzas: PropTypes.arrayOf(PropTypes.object).isRequired
}

Home.defaultProps = {
    pizzas: []
}
