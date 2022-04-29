/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { CardWrapper, BlogWrapper, CardDetail, ProductImg } from "./style";
import { Image } from 'antd';
import { Format } from "../../services";
import zoom from '../../assets/icons/full-size.png'

const CardItem = (props) => {

  const { title, type, description, image, product_id, salePrice, quantity, price, news_id } = props;
  const [img, setImg] = useState(image[0]);
  const [visible, setVisible] = useState(false);

  const handleSwitchImage = (e) => {
    setImg(e.target.src);
  };
  useEffect(() => {
    // window.location.reload() 
  }, [])
  return (
    <>
      {
        {
          item: (
            <CardWrapper img={img} imgHover={image[1] ? image[1] : image[0]} data-id={product_id}>
              <div className="card--image"><a href={`/product/${product_id}`} title={title}>
                {quantity === 0 && <span className="pro-sale-out">Hết hàng</span>}
                {salePrice !== price && <span className="pro-sale-percent">{100 - Math.round((salePrice / price * 100).toFixed(1))}%</span>}
              </a></div>
              <div className="card--title">
                <p><a href={`/product/${product_id}`} title={title}>{title}</a></p>
              </div>
              <div className="images__list">
                {image &&
                  image.map((item, index) => (
                    <div className="images__item" key={index}>
                      <img src={item} onClick={handleSwitchImage} alt='not' />
                    </div>
                  ))}
              </div>
              <div className="card--cost"><span style={{ color: 'rgb(249,76,67)' }}>{Format(salePrice)}</span>&ensp;<span style={{ color: 'rgb(147,147,147)' }}><del>{salePrice !== price && Format(price)}</del></span></div>
            </CardWrapper>
          ),
          blog: (
            <BlogWrapper data-id={news_id}>
              <div className="blog--image">
                <Link to={`/product/${news_id}`}><img src={image[0]} alt='hello xin chào các m'></img></Link>
              </div>
              <div className="blog--title">
                <p><Link to={`/product/${news_id}`}>{title}</Link></p>
              </div>
              <div className="blog--description">
                <p>

                  {description}
                </p>
              </div>
            </BlogWrapper>
          ),
          detail: (
            <>
              <CardDetail img={img}>
                <div className="product-gallery_slide">
                  {image &&
                    image.map((item, index) => (
                      <div className="product-gallery_thumb" key={index}>
                        <img src={item} onClick={handleSwitchImage} alt='not' width={"100%"} />
                      </div>
                    ))}
                </div>
              </CardDetail>
              <ProductImg img={img}>
                <div className="product-img-detail">
                  <img src={zoom} alt="" onClick={() => setVisible(true)} />
                </div>
              </ProductImg>
              <div style={{ display: 'none' }}>
                <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                  {image && image.map((item, index) => (
                    <Image src={item} key={index} />
                  ))}
                </Image.PreviewGroup>
              </div>
            </>
          )

        }[type]
      }
    </>
  );
};

export default CardItem;
