import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const CaoBang = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa Hàng Cao Bằng' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa Hàng Cao Bằng</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI CAO BẰNG</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Cao Bằng:</h3>
                                    <p>- Số nhà 15, Tổ 14, P.Sông Hiến, Cao Bằng - ĐT đặt hàng: 0345.341.678</p>
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

export default CaoBang