import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Header'

const HomePage = () => {
    return (
        <div>
            <Header />
            <h1>cun con</h1>
            <Link to='/product'>Product</Link>
        </div>
    )
}

export default HomePage