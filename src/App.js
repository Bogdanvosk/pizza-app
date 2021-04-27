import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Route } from 'react-router'

import { Header } from './components'
import { Home, Cart } from './pages'
import { setPizzas } from './redux/actions/pizzas'

function App() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.pizzas.items)

    useEffect(() => {
        axios.get('http://localhost:3000/db.json').then(({ data }) => {
            dispatch(setPizzas(data.pizzas))
        })
    }, [])

    return (
        <div className='wrapper'>
            <Header />
            <div className='content'>
                <Route exact path='/' render={() => <Home pizzas={items} />} />
                <Route path='/cart' component={Cart} />
            </div>
        </div>
    )
}

export default App
