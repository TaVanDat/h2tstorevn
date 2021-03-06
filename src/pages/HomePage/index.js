/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import useStateRef from 'react-usestateref'

import "antd/dist/antd.min.css";
import "./style.css";

import { NavLink, useNavigate, Link } from "react-router-dom";
import { Carousel, Spin, Space } from "antd";

import icon1 from "../../assets/images/service_icons/customerService.png";
import icon2 from "../../assets/images/service_icons/throwback.png";
import icon3 from "../../assets/images/service_icons/delivery.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";
import Containers from "../../components/common/Container";
import axios from "axios";


const HomePage = () => {
  const navigate = useNavigate();
  const urlImg = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/';
  const [productLatest, setProductLatest, productLatestRef] = useStateRef([])
  const [productSale, setProductSale, productSaleRef] = useStateRef([])
  const [newsLatest, setNewsLatest, newsLatestRef] = useStateRef([])
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      // const response = await api.callApiDefault('GET', 'product/latest')
      const response = await axios.get('http://localhost:5000/api/v1/product/latest')
      const sale75 = await axios.get('http://localhost:5000/api/v1/product/sale75')
      const news = await axios.get('http://localhost:5000/api/v1/news/latest')
      if (response && response.data) {
        setProductLatest(response.data.data.data);
      }
      if (sale75 && sale75.data) {
        setProductSale(sale75.data.data.data)
      }
      if (news && news.data) {
        setNewsLatest(news.data.data.data)
        setIsLoading(false)
      }
    } catch (error) {
      // navigate('/notfound')
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData();
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
                title="Th???i trang nam"
              />
            </a>
          </div>
          <div>
            <a href="/">
              <img
                src={require("../../assets/images/slide/slideshow_3.png")}
                alt="not"
                title="S???n ph???m n???i b???t"
              />
            </a>
          </div>
        </Carousel>
      </div>
      <div style={{ paddingTop: "11.0625rem" }} className='homepage-wrapper'>
        {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." />
          : <>
            {/* latest products section */}
            <div className="latest__products">
              <h2 className="latest__products--title title">
                <NavLink to="/product">s???n ph???m m???i</NavLink>
              </h2>

              <Containers>
                <div className="latest__products-lists">
                  {productLatestRef.current.map((item, index) => {
                    return (<CardItem key={item.Id} quantity={item.Quantity} product_id={item.Id} title={item.Name} salePrice={item.SalePrice} price={item.Price} image={item.Image.map(item => { return (urlImg + item) })} type='item' />)
                  })
                  }
                </div>
                <div className="moreItem--btn">
                  <Link to='/collections/all'>Xem th??m</Link>
                </div>
              </Containers>

            </div>

            {/* sale products section */}
            <div className="sale__products">
              <div className="sale__products-header">
                <h2 className="sale__products--title title">
                  <NavLink to="/collections/sale75">sale up to 75%</NavLink>
                </h2>
                <Link to='/collections/sale75/Sale up to 75'>Xem th??m &gt;&gt;</Link>
              </div>
              <Containers>
                <div className="sale__products-lists">
                  {productSaleRef.current && productSaleRef.current?.map((item, index) => {
                    return (<CardItem key={item.Id} quantity={item.Quantity} product_id={item.Id} title={item.Name} price={item.Price} salePrice={item.SalePrice} image={item.Image && item.Image.map(item => { return (urlImg + item) })} type='item' />)
                  })
                  }
                </div>

              </Containers>
            </div>

            {/* service section */}
            <div className="services">
              <div className="services__delivery">
                <img src={icon1} alt='some image4' />
                <p>Free h??ng tr??n 500k</p>
              </div>

              <div className="services__contact">
                <img src={icon2} alt='some image2' />
                <p>T???ng ????i t?? v???n mi???n ph??</p>
              </div>

              <div className="services__throwback">
                <img src={icon3} alt='some image4' />
                <p>?????i h??ng trong v??ng 7 ng??y</p>
              </div>
            </div>

            {/* blog section */}

            <div className="blog">
              <h2 className="blog__products--title title">
                <Link to="/product">h2t blog</Link>
              </h2>
              <Containers>
                <div className="blog--list">
                  {newsLatestRef.current.map((item, index) => {
                    return (<CardItem type='blog' key={item.Id} news_id={item.Id} title={item.Name} description={item.Content} image={(item.Image.split(',')).map(itemNew => { return (urlImg + itemNew) })} />)
                  })
                  }
                </div>
                <div className="moreItem--btn">
                  <Link to='/blogs/news'>Xem th??m</Link>
                </div>
              </Containers>
            </div>

          </>
        }
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
