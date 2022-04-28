import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CardWrapper, BlogWrapper } from "./style";
import { Format } from "../../services";

const CardItem = (props) => {
  const { title, type, description, image, product_id, salePrice, price, news_id } = props;
  const [img, setImg] = useState(image[0]);

  const handleSwitchImage = (e) => {
    setImg(e.target.src);
  };
  return (
    <>
      {
        {
          item: (
            <CardWrapper img={img} imgHover={image[1] ? image[1] : image[0]} data-id={product_id}>
              <div className="card--image"><Link to={`/product/${product_id}`}></Link></div>
              <div className="card--title">
                <p><Link to={`/product/${product_id}`}>{title}</Link></p>
              </div>
              <div className="images__list">
                {image &&
                  image.map((item, index) => (
                    <div className="images__item" key={index}>
                      <img src={item} onClick={handleSwitchImage} alt='not' />
                    </div>
                  ))}
              </div>
              <div className="card--cost"><span style={{ color: 'rgb(249,76,67)' }}>{Format(salePrice)}</span>&ensp;<span style={{ color: 'rgb(147,147,147)' }}><del>{price && Format(price)}</del></span></div>
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
          )

        }[type]
      }
    </>
  );
};

export default CardItem;
