import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css';
import './style.css'

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="banner-slide">
                <Carousel autoplay>
                    <div>
                        <a href="/">
                            <img
                                src={require("../../assets/images/slide/slideshow_1.png")}
                                alt="not"
                                title="Sale noi bat"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img
                                src={require("../../assets/images/slide/slideshow_2.png")}
                                alt="not"
                                title="Thời trang nam"
                            />
                        </a>
                    </div>
                    <div>
                        <a href="/">
                            <img
                                src={require("../../assets/images/slide/slideshow_3.png")}
                                alt="not"
                                title="Sản phẩm nổi bật"
                            />
                        </a>
                    </div>
                </Carousel>
            </div>
            <h1>cun con</h1>
            <Link to='/product'>Product</Link>
            <Footer />
        </>
    )
}

export default HomePage