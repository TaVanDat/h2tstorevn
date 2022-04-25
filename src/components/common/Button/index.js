import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
const Button = props => {
    return (
        <button id="custom-btn" onClick={props.onClick}>{props.name}</button>
    )
}

Button.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,

}

export default Button