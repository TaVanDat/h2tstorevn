import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const BacGiang = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa hàng Bắc Giang' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa hàng Bắc Giang</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI BẮC GIANG</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Bắc Giang:</h3>
                                    <p>- 190 Hoàng Văn Thụ, TP Bắc Giang, Bắc Giang - ĐT đặt hàng: 0886.160.111</p>
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

export default BacGiang