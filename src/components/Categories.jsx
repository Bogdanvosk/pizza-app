import React from 'react'
import PropTypes from 'prop-types'

const Categories = React.memo(({ items, onClickCategory, activeCategory }) => {
    return (
        <div className='categories'>
            <ul>
                <li
                    className={activeCategory === null ? 'active' : ''}
                    onClick={() => onClickCategory(null)}>
                    Все
                </li>
                {items &&
                    items.map((item, index) => (
                        <li
                            className={activeCategory === index ? 'active' : ''}
                            onClick={() => {
                                onClickCategory(index)
                            }}
                            key={`${item}_${index}`}>
                            {item}
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default Categories

Categories.propTypes = {
    items: PropTypes.arrayOf(PropTypes.string),
    onClickCategory: PropTypes.func.isRequired,
    activeCategory: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.instanceOf(null)
    ])
}

Categories.defaultProps = {
    activeCategory: null,
    items: []
}
