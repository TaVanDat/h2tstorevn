import React, { useState } from 'react'

import "antd/dist/antd.min.css";
import './style.css'

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { CardWrapper, ProductImg } from "./style";
import { Format } from "../../services";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/common/BreadCrum';
import { useParams } from 'react-router'
import Containers from '../../components/common/Container';
import { Image } from 'antd';
import zoom from '../../assets/icons/full-size.png'

const Detail = props => {
    const [visible, setVisible] = useState(false);

    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/'
    // const { title, image, product_id, salePrice, price } = props;
    const image = ['sale_birthday.png', 'sale_football.png', 'sale_football.png']
    const [img, setImg] = useState(url + image[0]);

    const { id } = useParams();
    console.log(id)
    const handleSwitchImage = (e) => {
        setImg(e.target.src);
    };
    return (
        <>
            <Header />
            <BreadCrumb number={3} name='TK Ngân hàng' />
            <div className="product-detail">
                <Containers>
                    <div className="product-detail-wrapper">
                        <div className="product-detail-main">
                            <div className="product-content-img">
                                <div className="product-gallery">
                                    <CardWrapper img={img}>
                                        <div className="product-gallery_slide">
                                            {image &&
                                                image.map((item, index) => (
                                                    <div className="product-gallery_thumb" key={index}>
                                                        <img src={url + item} onClick={handleSwitchImage} alt='not' />
                                                    </div>
                                                ))}
                                        </div>
                                    </CardWrapper>
                                    <ProductImg img={img}>
                                        <div className="product-img-detail">
                                            <img src={zoom} alt="" onClick={() => setVisible(true)} />
                                        </div>
                                    </ProductImg>
                                    <div style={{ display: 'none' }}>
                                        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
                                            {image && image.map(item => (
                                                <Image src={url + item} />
                                            ))}
                                        </Image.PreviewGroup>
                                    </div>
                                </div>
                            </div>
                            <div className="product-content-decs" id="detail-product">

                            </div>
                        </div>
                    </div>
                </Containers>
            </div>
            <Footer />
        </>
    )
}

Detail.propTypes = {}

export default Detail