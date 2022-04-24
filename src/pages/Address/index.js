import React from 'react'

import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';
const Address = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Hệ thống cửa hàng chính thức' />
            <Containers>
                <div className="address">
                    <div className="wrapper-address">
                        <div className="heading-page">
                            <h1>Hệ thống cửa hàng chính thức</h1>
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
                                    <p>-----------------------------------------------------</p>
                                    <h1><strong>HỆ THỐNG CỬA HÀNG H2T TẠI BẮC GIANG</strong></h1>
                                    <h3>■ H2T Bắc Giang:</h3>
                                    <p>- 190 Hoàng Văn Thụ, TP Bắc Giang, Bắc Giang - ĐT đặt hàng: 0886.160.111</p>
                                    <p>-----------------------------------------------------</p>
                                    <h1><strong>HỆ THỐNG CỬA HÀNG H2T TẠI HẢI PHÒNG</strong></h1>
                                    <h3>■ H2T H2T Hải Phòng:</h3>
                                    <p>- 41 Nguyễn Đức Cảnh, Lê Chân, Hải Phòng - ĐT đặt hàng: 0941.103.838</p>
                                    <p>-----------------------------------------------------</p>
                                    <h1><strong>HỆ THỐNG CỬA HÀNG H2T TẠI THANH HOÁ</strong></h1>
                                    <h3>■ H2T Thanh Hoá:</h3>
                                    <p>- 210 Tống Duy Tân, TP Thanh Hóa, Thanh Hóa - ĐT đặt hàng: 0916.072.258</p>
                                    <p>-----------------------------------------------------</p>
                                    <h1><strong>HỆ THỐNG CỬA HÀNG H2T TẠI QUẢNG NINH</strong></h1>
                                    <h3>■ H2T Quảng Ninh:</h3>
                                    <p>- 13 Trần Hưng Đạo, TP Hạ Long, Quảng Ninh- ĐT đặt hàng: 0886.666.263</p>
                                    <p>-----------------------------------------------------</p>
                                    <h1><strong>HỆ THỐNG CỬA HÀNG H2T TẠI CAO BẰNG</strong></h1>
                                    <h3>■ H2T Cao Bằng:</h3>
                                    <p>- Số nhà 15, Tổ 14, P.Sông Hiến, Cao Bằng - ĐT đặt hàng: 0345.341.678</p>
                                    <p>&nbsp;</p>
                                </div>
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

export default Address