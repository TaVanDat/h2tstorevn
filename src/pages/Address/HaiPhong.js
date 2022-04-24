import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const HaiPhong = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa hàng Hải Phòng' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa hàng Hải Phòng</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI HẢI PHÒNG</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Hải Phòng:</h3>
                                    <p>- 41 Nguyễn Đức Cảnh, Lê Chân, Hải Phòng - ĐT đặt hàng: 0941.103.838</p>
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

export default HaiPhong