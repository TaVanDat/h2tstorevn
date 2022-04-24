import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const ThanhHoa = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa hàng Thanh Hoá' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa hàng Thanh Hoá</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI THANH HOÁ</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Thanh Hoá:</h3>
                                    <p>- 210 Tống Duy Tân, TP Thanh Hóa, Thanh Hóa - ĐT đặt hàng: 0916.072.258</p>
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

export default ThanhHoa