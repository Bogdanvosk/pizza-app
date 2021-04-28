import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const Button = ({ outline, className, children, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={classNames('button', className, {
                'button--outline': outline
            })}>
            {children}
        </button>
    )
}

export default Button

Button.propTypes = {
    outline: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func
}
