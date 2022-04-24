import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const QuangNinh = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa hàng Quảng Ninh' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa hàng Quảng Ninh</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI QUẢNG NINH</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Quảng Ninh:</h3>
                                    <p>- 13 Trần Hưng Đạo, TP Hạ Long, Quảng Ninh- ĐT đặt hàng: 0886.666.263</p>
                                    <p>&nbsp;</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Containers>
            <Footer />
        </>
    )
}

export default QuangNinh