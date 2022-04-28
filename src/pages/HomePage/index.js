/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import useStateRef from 'react-usestateref'

import "antd/dist/antd.min.css";
import "./style.css";

import { NavLink, useNavigate } from "react-router-dom";
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
  const image = ["velvetembossedstriped1433_1.png", "UNIVERSAL1405_4.png", "UNIVERSAL1405_6.png"]
  const [productLatest, setProductLatest] = useState([])
  const [productSale, setProductSale] = useState([])
  const [newsLatest, setNewsLatest] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    try {
      // const response = await api.callApiDefault('GET', 'product/latest')
      const response = await axios.get('http://localhost:5000/api/v1/product/latest')
      if (response && response.data) {
        setProductLatest(response.data.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      navigate('/notfound')
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
      <div style={{ paddingTop: "11.0625rem" }}>
        {/* latest products section */}
        <div className="latest__products">
          <h2 className="latest__products--title title">
            <NavLink to="/product">sản phẩm mới</NavLink>
          </h2>
          {isLoading ? <Space size="middle">
            <Spin size="large" tip="Loading...">
            </Spin>
          </Space>
            :
            <Containers>
              <div className="latest__products-lists">
                {productLatest.map((item, index) => {//item.Image.map((itemImg, k) => { return url + itemImg })

                  return (<CardItem key={item.Id} product_id={item.Id} title={item.Name} price={item.SalePrice} image={item.Image.map(item => { return (urlImg + item) })} type='item' />)
                })
                }
              </div>
              <div className="moreItem--btn">
                <button>Xem thêm</button>
              </div>
            </Containers>
          }

        </div>

        {/* sale products section */}
        <div className="sale__products">
          <h2 className="sale__products--title title">
            <NavLink to="/product">sale up to 75%</NavLink>
          </h2>
          <div className="sale__products-lists">
            <CardItem image={image.map(item => { return (urlImg + item) })} title="chào e cô gái làm hôm" type='item' />
            {/* stripesblue1447_2.png
            https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/velvetembossedstriped1433_1_dohfff.png
            https://res.cloudinary.com/dbfjceflf/image/upload/v1651134901/h2tstore/UNIVERSAL1405_4_gro9ni.png
            https://res.cloudinary.com/dbfjceflf/image/upload/v1651134900/h2tstore/UNIVERSAL1405_6_seajik.png 
            https://res.cloudinary.com/dbfjceflf/image/upload/v1651138239/l5znz1aqpnriub2uwjuo.png
            
            */}
            {/* <img src={require('../../assets/images/0566_1.png')} alt="" /> */}
            {/* <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' />
            <CardItem image={image} title="chào e cô gái làm hôm" type='item' /> */}
          </div>
          <div className="moreItem--btn">
            <button>Xem thêm</button>
          </div>
        </div>

        {/* service section */}
        <div className="services">
          <div className="services__delivery">
            <img src={icon1} alt='some image4' />
            <p>Free hàng trên 500k</p>
          </div>

          <div className="services__contact">
            <img src={icon2} alt='some image2' />
            <p>Tổng đài tư vấn miễn phí</p>
          </div>

          <div className="services__throwback">
            <img src={icon3} alt='some image4' />
            <p>Đổi hàng trong vòng 7 ngày</p>
          </div>
        </div>

        {/* blog section */}

        <div className="blog">
          <h2 className="blog__products--title title">
            <NavLink to="/product">h2t blog</NavLink>
          </h2>

          <div className="blog--list">
            {/* <CardItem image={image} title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem image={image} title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem image={image} title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem image={image} title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " /> */}



          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
