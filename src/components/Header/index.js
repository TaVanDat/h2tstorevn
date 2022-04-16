import React from 'react'

import { Link } from 'react-router-dom'
import Containers from '../common/Container'

import './style.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-top">Mien phi</div>
            <Containers>
                <Link to='/product'>link</Link>
            </Containers>
        </div>
    )
}

export default Header