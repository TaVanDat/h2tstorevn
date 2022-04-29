import React from 'react'
import PropTypes from 'prop-types'

import './style.css'
const CustomButton = props => {
    return (
        <button style={{ ...props.style }} id="custom-btn" onClick={props.onClick} disabled={props.disabled}>{props.name}</button>
    )
}

CustomButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,

}

export default CustomButton