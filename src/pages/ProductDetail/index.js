import React, { useEffect, useState } from 'react'

import "antd/dist/antd.min.css";
import './style.css'

import icon1 from "../../assets/images/service_icons/customerService.png";
import icon2 from "../../assets/images/service_icons/throwback.png";
import icon3 from "../../assets/images/service_icons/delivery.png";

import queryString from 'query-string';
import useStateRef from 'react-usestateref'

import PropTypes from 'prop-types'
import { Link } from "react-router-dom";
import { Format } from "../../services";
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import BreadCrumb from '../../components/common/BreadCrum';
import { useNavigate, useParams } from 'react-router'
import Containers from '../../components/common/Container';
import { Image, Form, Radio, Spin, notification } from 'antd';
import select_size from '../../assets/images/select_size.png'
import CustomButton from '../../components/common/Button';

import axios from 'axios';
import CardItem from '../../components/CardItem';

import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../../redux/actions';



const formItemLayout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 14,
    },
};
const Detail = props => {
    const auth = localStorage.getItem('token') ? true : false;
    const dispatch = useDispatch();
    const [visibleSize, setVisibleSize] = useState(false);
    const [quantity, setQuantity] = useState(1)
    const [productId, setProductId, productIdRef] = useStateRef({})
    const [productRelative, setProductRelative, productRelativeRef] = useStateRef([])
    const [category_id, setCategory_id, category_idRef] = useStateRef(0);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();



    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/'

    const { id } = useParams();
    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/product/${id}`)
            if (response && response.data) {
                setProductId(response.data.data.data)
                setCategory_id(Number(response.data.data.data.CategoryId))
                // console.log(productIdRef.current)
                // console.log(category_idRef.current)
                const paramString = queryString.stringify({ id, category_id: category_idRef.current })
                const res = await axios.get(`http://localhost:5000/api/v1/product/relative?${paramString}`)
                if (res && res.data) {
                    setProductRelative(res.data.data.data)
                    setIsLoading(false)
                }
            }
        } catch (error) {
            navigate('/notfound')
        }

    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }
    const minusQuantity = () => {
        setQuantity(pre => pre - 1)
    }
    const plusQuantity = () => {
        setQuantity(next => next + 1)
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        getProduct();
    }, [id])
    const cart = useSelector(state => state.cart.cart)
    const success = useSelector(state => state.cart.success)
    const onFinish = (fieldValue) => {
        const values = {
            ...fieldValue,
            Quantity: String(quantity),
            ProductId: id,
            SalePrice: String(productIdRef.current.SalePrice),
            Size: fieldValue.Size ? fieldValue.Size : productIdRef.current.Size[0],
            Color: fieldValue.Color ? fieldValue.Color : productIdRef.current.Color[0],
        }
        // console.log(values)
        let cartLocal = {
            Name: productIdRef.current.Name
        }
        auth ?
            dispatch(addCart(JSON.parse(JSON.stringify(values))))
            :
            dispatch(addCart(JSON.parse(JSON.stringify({ ...values, ...cartLocal }))))
        // navigate('/account/login')
        // localStorage.setItem('cart_user', JSON.stringify([...cart_user, JSON.parse(JSON.stringify(values))]))
        // console.log(values);
        // console.log(cart)
        if (success) {
            notification.success({
                message: 'Thêm thành công!',
                description: '',
                className: 'add_success'
            })
        }
    };
    return (
        <>
            <Header />
            <BreadCrumb number={3} name={productIdRef.current.Name} />
            <div className="product-detail">
                {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." /> :
                    <Containers>
                        <div className="product-detail-wrapper">
                            <div className="product-detail-main">
                                {/* content left */}
                                <div className="product-content-img">
                                    <div className="product-gallery">
                                        <CardItem type="detail" image={productIdRef.current.Image.map(item => (url + item))} />
                                    </div>
                                </div>
                                {/* content - right */}
                                <div className="product-content-decs" id="detail-product">
                                    <div className="product-title">
                                        <h1>{productIdRef.current.Name}</h1>
                                        <span className="sku">SKU: {productIdRef.current.Code}</span>&nbsp;{productIdRef.current.Quantity <= 0 && <span style={{ color: 'rgb(51,42,43)' }}>Hết hàng</span>}
                                    </div>
                                    <div className="product-price">
                                        {productIdRef.current.SalePrice !== productIdRef.current.Price &&
                                            <span className="percent-sale">{100 - Math.round((productIdRef.current.SalePrice / productIdRef.current.Price * 100).toFixed(1))}%</span>
                                        }
                                        <span className="sale-price">{Format(productIdRef.current.SalePrice)}</span>&ensp;<span className="price"><del>{productIdRef.current.Price !== productIdRef.current.SalePrice && Format(productIdRef.current.Price)}</del></span>
                                    </div>
                                    <Form
                                        name="validate_other"
                                        {...formItemLayout}
                                        onFinish={onFinish}
                                        className="add-cart"
                                    >
                                        <div className="select-swatch">
                                            <div className="select-size">
                                                <Form.Item
                                                    name="Size"
                                                >
                                                    <Radio.Group>
                                                        {productIdRef.current.Size && productIdRef.current.Size.map((item, index) => (
                                                            <Radio.Button key={index} value={item}>{item}</Radio.Button>

                                                        ))}
                                                    </Radio.Group>
                                                </Form.Item>
                                            </div>
                                            <div className="select-color">
                                                <Form.Item
                                                    name="Color"
                                                >
                                                    <Radio.Group>
                                                        {
                                                            productIdRef.current.Color
                                                                && productIdRef.current.Image.length >= productIdRef.current.Color.length
                                                                ? productIdRef.current.Color.map((item, index) => (
                                                                    <Radio.Button key={index} value={item}><img src={url + productIdRef.current.Image[index]} alt="" width={40} style={{ height: 38, padding: 1 }} />&emsp;{item}</Radio.Button>
                                                                ))
                                                                : productIdRef.current.Color.filter((item, index) => { if (index === productIdRef.current.Image.length) return item }).map((item, index) => (
                                                                    <Radio.Button key={index} value={item}><img src={url + productIdRef.current.Image[index]} alt="" width={40} style={{ height: 38, padding: 1 }} />&emsp;{item}</Radio.Button>
                                                                ))
                                                        }
                                                        {/* <Radio.Button key={0} value={productIdRef.current.Color[0]}><img src={url + productIdRef.current.Image[0]} alt="" width={40} style={{ height: 38, padding: 1 }} />&emsp;{productIdRef.current.Color[0]}</Radio.Button> */}
                                                        {/* Lỗi thiếu ảnh */}
                                                    </Radio.Group>
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="lead-select" onClick={() => setVisibleSize(true)}>
                                            <span>hướng dẫn chọn size</span>
                                            <div style={{ display: "none" }}>
                                                <Image preview={{ visible: visibleSize, onVisibleChange: state => setVisibleSize(state) }} src={select_size} />
                                            </div>
                                        </div>
                                        <div className="select-action">
                                            <div className="quantity-count" >
                                                <input type="button" value="-" onClick={minusQuantity} className="qty-btn" />
                                                <input type="text" id="quantity" onChange={handleQuantity} name="quantity" value={quantity} min="1" className="quantity-selector" />
                                                <input type="button" value="+" onClick={plusQuantity} className="qty-btn" />
                                            </div>
                                            <div className="add-to-cart">

                                                <Form.Item
                                                    wrapperCol={{
                                                        span: 12,
                                                        offset: 6,
                                                    }}
                                                >
                                                    {/* {
                                                    productIdRef.current.Quantity = 0
                                                } */}
                                                    <CustomButton disabled={productIdRef.current.Quantity === 0 ? true : false} style={productIdRef.current.Quantity === 0 ? { cursor: 'not-allowed', opacity: 0.4 } : {}} name='Thêm vào giỏ' />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form>
                                    <div className="product-description">{productIdRef.current.Description}</div>
                                </div>
                            </div>
                        </div>


                        {/* info-des-product */}
                        <div className="info-des-product">
                            <div className="policy-receive">
                                <div className="policy-item">
                                    <h4 className="title_strip">Chính sách giao - Nhận - Đổi trả hàng</h4>
                                    <div className="content desc_strip">
                                        <p>CHÍNH SÁCH GIAO NHẬN - ĐỔI TRẢ HÀNG</p>
                                        <p>- Free ship cho đơn hàng &nbsp;≥&nbsp;&nbsp;500,000đ.
                                            <br />- Mức phí 30.000đ cho đơn hàng dưới 500,000đ
                                            <br />- Được kiểm tra hàng trước khi nhận hàng
                                            <br />- Đổi / Trả trong vòng 7&nbsp;ngày kể từ khi nhận hàng
                                            <br />- Không áp dụng đổi/trả sản phẩm trong CTKM
                                            <br />- Miễn phí đổi trả nếu lỗi sai sót từ phía H2T
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="customer-vip">
                                <div className="policy-item">
                                    <h4 className="title_strip">Ưu đãi khách VIP</h4>
                                    <div className="content desc_strip">
                                        <ul>
                                            <li>Hóa đơn&nbsp;≥ 500.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ thành viên &amp;&nbsp;được chiết khấu 5%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Hóa đơn&nbsp;≥&nbsp;5.000.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ VIP1 &amp; được chiết khấu 8%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Hóa đơn&nbsp;≥ 10.000.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ VIP &amp; được chiết khấu 10%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Hóa đơn&nbsp;≥ 20.000.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ VIP3 &amp; được chiết khấu 15%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Hóa đơn&nbsp;≥ 30.000.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ VIP4 &amp;&nbsp;được chiết khấu 20%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Hóa đơn&nbsp;≥ 50.000.000 VNĐ&nbsp;khách hàng sẽ được cấp thẻ VIP5&nbsp;&amp;&nbsp;được chiết khấu 20%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Khách hàng mua hàng đúng dịp sinh nhật (tính trong khoảng thời gian trước ngày sinh nhật 3 ngày và sau sinh nhật 3 ngày): được giảm 20% trên hóa đơn mua hàng&nbsp;(không áp dụng đồng thời cùng thẻ VIP và các chương trình ưu đãi khác).</li>
                                        </ul>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                            <div className="address-store">
                                <div className="policy-item">
                                    <h4 className="title_strip">Địa chỉ cửa hàng</h4>
                                    <div className="content desc_strip">
                                        <p>H2T HÀ NỘI<br />&nbsp;▪️CS1 :&nbsp;51 Xuân Thủy, Cầu Giấy, Hà Nội
                                            <br />&nbsp;▪️CS2 :&nbsp;73 Cầu Diễn, Bắc Từ Liêm, Hà Nội
                                            <br />&nbsp;▪️CS3 : 123 Trương Định, Hai Bà Trưng, Hà Nội
                                            <br />&nbsp;▪️CS4&nbsp;: 332A Nguyễn Trãi, Nam Từ Liêm, Hà Nội
                                            <br />&nbsp;▪️CS5&nbsp;: 390 Quang Trung, Hà Đông, Hà Nội
                                            <br />H2T HẢI PHÒNG
                                            <br />&nbsp;▪️41 Nguyễn Đức Cảnh, Lê Chân, Hải Phòng
                                            <br />H2T THANH HÓA
                                            <br />&nbsp;▪️210 Tống Duy Tân, TP Thanh Hóa, Thanh Hóa
                                            <br />H2T QUẢNG NINH
                                            <br />&nbsp;▪️13 Trần Hưng Đạo, TP Hạ Long, Quảng Ninh
                                            <br />H2T BẮC GIANG
                                            <br />&nbsp;▪️190 Hoàng Văn Thụ, TP Bắc Giang, Bắc Giang
                                            <br />H2T CAO BẰNG
                                            <br />&nbsp;▪️Số nhà 15, Tổ 14, P.Sông Hiến, Cao Bằng
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* info-bellow-product */}
                        <div className="info-bellow-product">
                            <div className="info-bellow_item">
                                <div className="banner-footer-item">
                                    <img src={icon1} width={35} alt='not' />
                                    <div className="banner-footer-item-info">
                                        <p className="banner-footer-item-title">FREE SHIP ĐƠN HÀNG TỪ 500.000Đ</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-bellow_item">
                                <div className="banner-footer-item">
                                    <img src={icon2} width={35} alt="not" />
                                    <div className="banner-footer-item-info">
                                        <p className="banner-footer-item-title">ĐỔI HÀNG TRONG VÒNG 3 NGÀY</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-bellow_item">
                                <div className="banner-footer-item">
                                    <img src={icon3} width={35} alt='not' />
                                    <div className="banner-footer-item-info">
                                        <p className="banner-footer-item-title">THANH TOÁN KHI NHẬN HÀNG</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* banner footer */}
                        <div className="banner-pro"><Link to="/">
                            <img src="https://res.cloudinary.com/dbfjceflf/image/upload/v1651240669/h2tstore/banner/banner-product-qc.png" alt="" />
                        </Link></div>

                        {/* product relative */}
                        <div className="list-productRelated">
                            <div className="heading-title">
                                <h2>Sản phẩm liên quan</h2>
                            </div>
                            <div className="content-product-list">
                                {
                                    productRelativeRef.current
                                    && productRelativeRef.current.map((item) => {
                                        return (<CardItem key={item.Id} quantity={item.Quantity} product_id={item.Id} title={item.Name} price={item.Price} salePrice={item.SalePrice} image={item.Image && item.Image.filter((itemFilter, index,) => { if (index <= 1) return (itemFilter) }).map(itemMap => { return (url + itemMap) })} type='item' />)
                                    })
                                }
                            </div>
                        </div>
                    </Containers>
                }

            </div>
            <Footer />
        </>
    )
}

Detail.propTypes = {}

export default Detail