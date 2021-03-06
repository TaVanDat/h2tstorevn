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
import parse from "html-react-parser";



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
    const [isDisabled, setIsDisabled] = useState(false);
    const [isStyle, setIsStyle] = useState({});
    const navigate = useNavigate();



    const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/'

    const { id } = useParams();
    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/v1/product/${id}`)
            if (response && response.data) {
                setProductId(response.data.data.data)
                setCategory_id(Number(response.data.data.data.CategoryId))
                if (Number(productIdRef.current.Quantity) === 0) {
                    console.log('first')
                    setIsDisabled(true);
                    setIsStyle({
                        cursor: 'not-allowed', opacity: 0.4
                    })
                }
                else {
                    setIsDisabled(false);
                    setIsStyle({})
                }
                // console.log(productIdRef.current)
                // console.log(category_idRef.current)
                const paramString = queryString.stringify({ id, category_id: category_idRef.current })
                try {

                    const res = await axios.get(`http://localhost:5000/api/v1/product/relative?${paramString}`)
                    if (res && res.data) {
                        setProductRelative(res.data.data.data)
                        setIsLoading(false)
                    }
                } catch (error) {
                    setProductRelative([])
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

    useEffect(() => {
        if (quantity === productIdRef.current.Quantity || productIdRef.current.Quantity === 0) {
            setIsDisabled(true);
            setIsStyle({
                cursor: 'not-allowed', opacity: 0.4
            })
        }
        else {
            setIsDisabled(false);
            setIsStyle({})
        }
    }, [quantity])
    const minusQuantity = () => {
        setQuantity(pre => {
            if (pre > 1) return pre - 1
            else return 1
        })
    }
    const plusQuantity = () => {
        setQuantity(next => Number(next) + 1)
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
        let cartLocals = {
            Name: productIdRef.current.Name
        }
        if (auth) {
            dispatch(addCart(JSON.parse(JSON.stringify(values))))
            if (success) {
                notification.success({
                    message: 'Th??m th??nh c??ng!',
                    description: '',
                    className: 'add_success'
                })
            }

        }
        else {
            notification.info({
                message: 'B???n n??n ????ng nh???p ????? mua h??ng d??? h??n!',
                description: '',
                className: 'add_success'
            })
            dispatch(addCart(JSON.parse(JSON.stringify({ ...values, ...cartLocals }))))

        }
        // navigate('/account/login')
        // localStorage.setItem('cart_user', JSON.stringify([...cart_user, JSON.parse(JSON.stringify(values))]))
        // console.log(values);
        // console.log(cart)
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
                                        <span className="sku">SKU: {productIdRef.current.Code}</span>&nbsp;{productIdRef.current.Quantity <= 0 && <span style={{ color: 'rgb(51,42,43)' }}>H???t h??ng</span>}
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
                                                        {/* L???i thi???u ???nh */}
                                                    </Radio.Group>
                                                </Form.Item>
                                            </div>
                                        </div>
                                        <div className="lead-select" onClick={() => setVisibleSize(true)}>
                                            <span>h?????ng d???n ch???n size</span>
                                            <div style={{ display: "none" }}>
                                                <Image preview={{ visible: visibleSize, onVisibleChange: state => setVisibleSize(state) }} src={select_size} />
                                            </div>
                                        </div>
                                        <div className="select-action">
                                            <div className="quantity-count" >
                                                <input type="button" value="-" onClick={minusQuantity} className="qty-btn" />
                                                <input type="text" id="quantity" onChange={handleQuantity} name="quantity" value={quantity} min="1" className="quantity-selector" />
                                                <input type="button" value="+" onClick={plusQuantity} className="qty-btn" />
                                                {quantity <= 0 && <p style={{ color: 'red' }}>S??? l?????ng ph???i l???n h??n 0</p>}
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
                                                    {/* <CustomButton disabled={(productIdRef.current.Quantity === 0 || Number(quantity) === productIdRef.current.Quantity) ? true : false} style={(productIdRef.current.Quantity || Number(quantity) === productIdRef.current.Quantity) === 0 ? { cursor: 'not-allowed', opacity: 0.4 } : {}} name='Th??m v??o gi???' /> */}
                                                    <CustomButton disabled={isDisabled} style={isStyle} name='Th??m v??o gi??? ' />
                                                </Form.Item>
                                            </div>
                                        </div>
                                    </Form>
                                    <div className="product-description">M?? t???<br />{parse(productIdRef.current.Description)}</div>
                                </div>
                            </div>
                        </div>


                        {/* info-des-product */}
                        <div className="info-des-product">
                            <div className="policy-receive">
                                <div className="policy-item">
                                    <h4 className="title_strip">Ch??nh s??ch giao - Nh???n - ?????i tr??? h??ng</h4>
                                    <div className="content desc_strip">
                                        <p>CH??NH S??CH GIAO NH???N - ?????I TR??? H??NG</p>
                                        <p>- Free ship cho ????n h??ng &nbsp;???&nbsp;&nbsp;500,000??.
                                            <br />- M???c ph?? 30.000?? cho ????n h??ng d?????i 500,000??
                                            <br />- ???????c ki???m tra h??ng tr?????c khi nh???n h??ng
                                            <br />- ?????i / Tr??? trong v??ng 7&nbsp;ng??y k??? t??? khi nh???n h??ng
                                            <br />- Kh??ng ??p d???ng ?????i/tr??? s???n ph???m trong CTKM
                                            <br />- Mi???n ph?? ?????i tr??? n???u l???i sai s??t t??? ph??a H2T
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="customer-vip">
                                <div className="policy-item">
                                    <h4 className="title_strip">??u ????i kh??ch VIP</h4>
                                    <div className="content desc_strip">
                                        <ul>
                                            <li>H??a ????n&nbsp;??? 500.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? th??nh vi??n &amp;&nbsp;???????c chi???t kh???u 5%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>H??a ????n&nbsp;???&nbsp;5.000.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? VIP1 &amp; ???????c chi???t kh???u 8%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>H??a ????n&nbsp;??? 10.000.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? VIP &amp; ???????c chi???t kh???u 10%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>H??a ????n&nbsp;??? 20.000.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? VIP3 &amp; ???????c chi???t kh???u 15%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>H??a ????n&nbsp;??? 30.000.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? VIP4 &amp;&nbsp;???????c chi???t kh???u 20%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>H??a ????n&nbsp;??? 50.000.000 VN??&nbsp;kh??ch h??ng s??? ???????c c???p th??? VIP5&nbsp;&amp;&nbsp;???????c chi???t kh???u 20%&nbsp;</li>
                                            <li style={{ textAlign: "justify" }}>Kh??ch h??ng mua h??ng ????ng d???p sinh nh???t (t??nh trong kho???ng th???i gian tr?????c ng??y sinh nh???t 3 ng??y v?? sau sinh nh???t 3 ng??y): ???????c gi???m 20% tr??n h??a ????n mua h??ng&nbsp;(kh??ng ??p d???ng ?????ng th???i c??ng th??? VIP v?? c??c ch????ng tr??nh ??u ????i kh??c).</li>
                                        </ul>
                                        <p>&nbsp;</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                            </div>
                            <div className="address-store">
                                <div className="policy-item">
                                    <h4 className="title_strip">?????a ch??? c???a h??ng</h4>
                                    <div className="content desc_strip">
                                        <p>H2T HA?? NO????I<br />&nbsp;??????CS1 :&nbsp;51 Xua??n Thu??y, Ca????u Gia????y, Ha?? No????i
                                            <br />&nbsp;??????CS2 :&nbsp;73 Ca????u Die????n, Ba????c Tu???? Lie??m, Ha?? No????i
                                            <br />&nbsp;??????CS3 : 123 Tru??o??ng ??i??nh, Hai Ba?? Tru??ng, Ha?? No????i
                                            <br />&nbsp;??????CS4&nbsp;: 332A Nguye????n Tra??i, Nam Tu???? Lie??m, Ha?? No????i
                                            <br />&nbsp;??????CS5&nbsp;: 390 Quang Trung, Ha?? ??o??ng, Ha?? No????i
                                            <br />H2T HA??I PHO??NG
                                            <br />&nbsp;??????41 Nguye????n ??u????c Ca??nh, Le?? Cha??n, Ha??i Pho??ng
                                            <br />H2T THANH HO??A
                                            <br />&nbsp;??????210 To????ng Duy Ta??n, TP Thanh Ho??a, Thanh Ho??a
                                            <br />H2T QUA??NG NINH
                                            <br />&nbsp;??????13 Tra????n Hu??ng ??a??o, TP Ha?? Long, Qua??ng Ninh
                                            <br />H2T BA????C GIANG
                                            <br />&nbsp;??????190 Hoa??ng Va??n Thu??, TP Ba????c Giang, Ba????c Giang
                                            <br />H2T CAO BA????NG
                                            <br />&nbsp;??????So???? nha?? 15, To???? 14, P.So??ng Hie????n, Cao Ba????ng
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
                                        <p className="banner-footer-item-title">FREE SHIP ????N H??NG T??? 500.000??</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-bellow_item">
                                <div className="banner-footer-item">
                                    <img src={icon2} width={35} alt="not" />
                                    <div className="banner-footer-item-info">
                                        <p className="banner-footer-item-title">?????I H??NG TRONG V??NG 3 NG??Y</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info-bellow_item">
                                <div className="banner-footer-item">
                                    <img src={icon3} width={35} alt='not' />
                                    <div className="banner-footer-item-info">
                                        <p className="banner-footer-item-title">THANH TO??N KHI NH???N H??NG</p>
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
                                <h2>S???n ph???m li??n quan</h2>
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