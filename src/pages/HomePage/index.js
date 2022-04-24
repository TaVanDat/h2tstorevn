import React from "react";
import { NavLink } from "react-router-dom";
import { Carousel } from "antd";
import "antd/dist/antd.min.css";
import "./style.css";
import icon1 from "../../assets/images/service_icons/customerService.png";
import icon2 from "../../assets/images/service_icons/throwback.png";
import icon3 from "../../assets/images/service_icons/delivery.png";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CardItem from "../../components/CardItem";


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
      <div style={{ width: "80%", margin: "0 auto", paddingTop: "11.0625rem" }}>
        {/* latest products section */}
        <div className="latest__products">
          <h2 className="latest__products--title title">
            <NavLink to="/product">sản phẩm mới</NavLink>
          </h2>
          <div className="latest__products-lists">
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
          </div>
          <div className="moreItem--btn">
            <button>Xem thêm</button>
          </div>
        </div>

        {/* sale products section */}
        <div className="sale__products">
          <h2 className="sale__products--title title">
            <NavLink to="/product">sale up to 75%</NavLink>
          </h2>
          <div className="sale__products-lists">
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
            <CardItem title="chào e cô gái làm hôm" type='item' />
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
            <CardItem title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />
            <CardItem title="chào e cô gái làm hôm" type='blog' description="cùngkg flkfkf fkfkf fkfkfkf fkfkf fkfk fkfkf fkf fkf fkf fkf kf fkf fkf kf fkf fkf " />



          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
