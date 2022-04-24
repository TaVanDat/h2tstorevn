import React from 'react'
import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const Hanoi = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Cửa hàng Hà Nội' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Cửa hàng Hà Nội</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p>&nbsp;</p>
                                <h1><span><strong>HỆ THỐNG CỬA HÀNG H2T TẠI HÀ NỘI</strong></span></h1>
                                <div>&nbsp;</div>
                                <div>
                                    <h3>■ H2T Xuân Thuỷ:</h3>
                                    <p>- 51 Xuân Thủy, Cầu Giấy, Hà Nội - ĐT đặt hàng: 0888.516.299</p>
                                    <h3>■ H2T Cầu Diễn:</h3>
                                    <p>- 73 Cầu Diễn, Bắc Từ Liêm, Hà Nội - ĐT đặt hàng: 0888.198.566</p>
                                    <h3>■ H2T Trương Định:</h3>
                                    <p>- 123 Trương Định, Hai Bà Trưng, Hà Nội - ĐT đặt hàng:  0824.169.998</p>
                                    <h3>■ H2T Nguyễn Trãi:</h3>
                                    <p>- 332A Nguyễn Trãi, Nam Từ Liêm, Hà Nội - ĐT đặt hàng: 0888.538.266</p>
                                    <h3>■ H2T Hà Đông:</h3>
                                    <p>- 390 Quang Trung, Hà Đông, Hà Nội - ĐT đặt hàng: 0888.061.588</p>
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

export default Hanoi