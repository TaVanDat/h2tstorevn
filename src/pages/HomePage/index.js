import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'antd';

import 'antd/dist/antd.min.css';
import './style.css'

import axios from 'axios'
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const HomePage = () => {
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/product/2', { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res.data.data[0])
            })
            .catch(err => {
                console.log(err);
            })
    }, [])
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
            <section className='product-latest'>
                <h1>cun con</h1>
                <Link to='/product'>Product</Link>
                <img src={require('../../assets/images/slide/slideshow_2.png')} width='200' alt="not" />
            </section>
            <Footer />
        </>
    )
}

export default HomePage