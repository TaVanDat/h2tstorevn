import React from 'react'

import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';

const GuidelinesPolicy = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Hướng dẫn - Chính sách' />
            <Containers>
                <div className="policy">
                    <div className="wrapper-policy">
                        <div className="heading-page">
                            <h1>Hướng dẫn - Chính sách</h1>
                        </div>
                    </div>
                </div>
            </Containers>
            <Footer />
        </>
    )
}

export default GuidelinesPolicy