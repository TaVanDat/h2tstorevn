import React from 'react'
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './style.css';

const NotFound = () => {
    return (
        <>
            <Header />
            <div id="404" className="pageNot">
                <div className="page-not-container">
                    <div className="content-pagenot">
                        <h1>Không tìm thấy trang</h1>
                        <p className="subtext">Xin lỗi, chúng tôi không tìm thấy trang này</p>
                        <Link to="/">Trở về trang chủ</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default NotFound