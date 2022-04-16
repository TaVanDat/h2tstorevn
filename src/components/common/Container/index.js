import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
const Containers = props => {
    return (
        <div className='containers'>{props.children}</div>
    )
}

Containers.propTypes = {
    children: PropTypes.node.isRequired
}

export default Containers