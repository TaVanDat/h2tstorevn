import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const urlImg = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/';

const Bank = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='TK Ngân hàng' />
            <Containers>
                <div className="bank">
                    <div className="wrapper-bank">
                        <div className="heading-page">
                            <h1>TK Ngân hàng</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <p>
                                    <img src={urlImg + 'bank.png'} alt="" />
                                </p>
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Containers>
            <Footer />
        </>
    )
}

export default Bank