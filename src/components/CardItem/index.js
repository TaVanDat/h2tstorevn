import React, { useState } from "react";
import {CardWrapper, BlogWrapper} from "./style";
import img1 from "../../assets/images/slide/slideshow_1.png";
import img2 from "../../assets/images/slide/slideshow_2.png";
import img3 from "../../assets/images/slide/slideshow_3.png";

const CardItem = (props) => {
  const { title, type, description } = props;
  const Images = [img1, img2, img3];
  const [img, setImg] = useState(img1);

  const handleSwitchImage = (e) => {
    setImg(e.target.src);
  };
  return (
    <>
      {
        {
          item: (
            <CardWrapper img={img} imgHover={img2}>
              <div className="card--image"></div>
              <div className="card--title">
                <p>{title}</p>
              </div>
              <div className="images__list">
                {Images &&
                  Images.map((image, index) => (
                    <div className="images__item" key={index}>
                      <img src={image} onClick={handleSwitchImage} alt='some image444' />
                    </div>
                  ))}
              </div>
              <div className="card--cost">200.000$</div>
            </CardWrapper>
          ),
          blog:(
            <BlogWrapper>
              <div className="blog--image">
                <img src={img1} alt='hello xin chào các m'></img>
              </div>
              <div className="blog--title">
                <p>{title}</p>
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