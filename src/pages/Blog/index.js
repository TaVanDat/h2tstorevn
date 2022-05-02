/* eslint-disable array-callback-return */

import React, { useEffect, useState } from 'react';

import './style.css';

import useStateRef from 'react-usestateref';
import Moment from 'moment';
import { Link, useNavigate, useParams } from 'react-router-dom';
import BreadCrumb from '../../components/common/BreadCrum';
import Containers from '../../components/common/Container';
import Footer from '../../components/Footer'
import Header from '../../components/Header';
import { Spin } from 'antd';



import axios from 'axios';

const Blog = () => {
    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651304496/h2tstore/';
    const img = 'sale_birthday.png';
    const navigate = useNavigate();
    const { page_link } = useParams();
    const [dataBlog, setDataBlog, dataBlogRef] = useStateRef([]);
    const [display1, setDisplay1] = useState(false);
    const [display2, setDisplay2] = useState(false);
    const [display3, setDisplay3] = useState(false);
    const [display4, setDisplay4] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const getBLog = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/v1/news/list')
            if (response && response.data) {
                setDataBlog(response.data.data.data)
                setIsLoading(false);
            }
        } catch (error) {
            navigate('/notfound')
        }

    }
    useEffect(() => {
        window.scrollTo(0, 0)
        getBLog();
    }, [])
    return (
        <div className='pages page-blogs'>
            <Header />
            <BreadCrumb name='Tin tức' />
            <Containers>
                <div className="wrapper-page-blog">
                    {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." /> :
                        <div className="container-blog">
                            <div className="sidebar-blog">
                                <div className="news-latest">
                                    <div className="sidebarblog-title title_block">
                                        <h2>Bài viết mới nhất
                                            {/* <span className="fa fa-angle-down"></span> */}
                                        </h2>
                                    </div>
                                    <div className="list-news-latest layered">
                                        {dataBlogRef.current && dataBlogRef.current.map(item => {
                                            return (
                                                <div className="item-article" key={item.Id}>
                                                    <div className="post-image">
                                                        <Link to={`/blogs/news/${item.Id}`}>
                                                            <img src={url + item.Image} alt="not" className="ls-is-cached lazyloaded" />
                                                        </Link>
                                                    </div>

                                                    <div className="post-content">
                                                        <h3>
                                                            <Link to="/blogs/news/san-sale-99k-ngay-9-9">{item.Name}</Link>
                                                        </h3>
                                                        <span className="date">
                                                            {Moment(item.CreatedAt).format("DD-MM-YYYY")}
                                                        </span>
                                                    </div>
                                                </div>
                                            )
                                        })
                                        }

                                    </div>
                                </div>
                                <div className="menu-blog">
                                    <div className="group-menu">
                                        <div className="sidebarblog-title title_block">
                                            <h2>Danh mục blog
                                                {/* <span className="fa fa-angle-down"></span> */}
                                            </h2>
                                        </div>
                                        <div className="layered layered-category">
                                            <div className="layered-content">
                                                <ul className="tree-menu">
                                                    <li className="tree-menu-lv1 has-child  menu-uncollap" onClick={() => setDisplay1(state => !state)}>
                                                        <span className="">SẢN PHẨM</span>
                                                        <span className="icon-control"><i className="fa fa-minus"></i></span>
                                                        {display1 &&
                                                            <ul className="tree-menu-sub">
                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/sale75/Sale up to 75" title="SALE OFF 75%">SALE OFF 75%</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/ao/Áo" title="ÁO">ÁO</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections//quan/Quần" title="QUẦN">QUẦN</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/category/9/Balo-túi sách" title="BALO - TÚI SÁCH">BALO - TÚI SÁCH</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/category/10/Giày da" title="GIÀY DA">GIÀY DA</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/category/11/Phụ kiện khác" title="PHỤ KIỆN KHÁC">PHỤ KIỆN KHÁC</Link>
                                                                </li>

                                                            </ul>
                                                        }
                                                    </li>
                                                    <li className="tree-menu-lv1 has-child  menu-collap " onClick={() => setDisplay2(state => !state)}>
                                                        <span className="">SALE UP TO 75%</span>
                                                        <span className="icon-control"><i className="fa fa-minus"></i></span>
                                                        {display2 &&

                                                            <ul className="tree-menu-sub">
                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/sale75/somi-dai/Sale áo sơ mi_ quần dài" title="SALE ÁO SƠ MI_ QUẦN DÀI">SALE ÁO SƠ MI_ QUẦN DÀI</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/sale75/thun-short/Sale áo thun_ quần short" title="SALE ÁO THUN_ QUẦN SHORT">SALE ÁO THUN_ QUẦN SHORT</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/collections/sale75/phu-kien/Sale phụ kiện" title="SALE PHỤ KIỆN">SALE PHỤ KIỆN</Link>
                                                                </li>

                                                            </ul>
                                                        }
                                                    </li>
                                                    <li className="tree-menu-lv1 has-child  menu-collap " onClick={() => setDisplay3(state => !state)}>
                                                        <span className="">ĐỊA CHỈ STORE</span>
                                                        <span className="icon-control"><i className="fa fa-minus"></i></span>
                                                        {display3 &&

                                                            <ul className="tree-menu-sub">
                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/cua-hang-ha-noi" title="HÀ NỘI">HÀ NỘI</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/cua-hang-bac-giang" title="BẮC GIANG">BẮC GIANG</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/cua-hang-hai-phong" title="HẢI PHÒNG">HẢI PHÒNG</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/cua-hang-thanh-hoa" title="THANH HOÁ">THANH HOÁ</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/quang-ninh" title="QUẢNG NINH">QUẢNG NINH</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/cua-hang-cao-bang" title="CAO BẰNG">CAO BẰNG</Link>
                                                                </li>

                                                            </ul>
                                                        }
                                                    </li>
                                                    <li className="tree-menu-lv1 has-child  menu-collap " onClick={() => setDisplay4(state => !state)}>
                                                        <span className="">H.DẪN - C.SÁCH</span>
                                                        <span className="icon-control"><i className="fa fa-minus"></i></span>
                                                        {display4 &&
                                                            <ul className="tree-menu-sub">
                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/chinh-sach-doi-tra" title="CS ĐỔI TRẢ">CS ĐỔI TRẢ</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/pages/tk-ngan-hang" title="TK NGÂN HÀNG">TK NGÂN HÀNG</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/" title="KT ĐƠN HÀNG">KT ĐƠN HÀNG</Link>
                                                                </li>

                                                                <li>
                                                                    <span></span>
                                                                    <Link to="/" title="MEMBERSHIP">MEMBERSHIP</Link>
                                                                </li>

                                                            </ul>
                                                        }
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="blog-item">
                                <div className="heading-page clearfix">
                                    <h1>Tin tức</h1>
                                </div>
                                <div className="blog-content">
                                    <div className="list-article-content blog-posts">
                                        {
                                            dataBlogRef.current && dataBlogRef.current.map((item, index) => {
                                                return (
                                                    <article className="blog-loop" key={index}>
                                                        <div className="blog-post row">
                                                            <div className="blog-item-image">
                                                                <Link to={`/blogs/news/${item.Id}`} className="blog-post-thumbnail" title="Săn sale 99K ngày 9.9" rel="nofollow">
                                                                    <img className='lazyloaded' src={url + item.Image} alt='not' />
                                                                </Link>
                                                            </div>
                                                            <div className="blog-item-content">
                                                                <h3 className="blog-post-title">
                                                                    <Link to={`/blogs/news/${item.Id}`} title="Săn sale 99K ngày 9.9">{item.Name}</Link>
                                                                </h3>
                                                                <div className="blog-post-meta">
                                                                    <span className="date">
                                                                        {Moment(item.CreatedAt).format("DD-MM-YYYY")}
                                                                    </span>
                                                                </div>
                                                                <p className="entry-content">{item.Content}</p>
                                                            </div>
                                                        </div>
                                                    </article>
                                                )
                                            })
                                        }

                                    </div>
                                    <div id="pagination" className="clearfix">
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </Containers>
            <Footer />
        </div>
    )
}

export default Blog