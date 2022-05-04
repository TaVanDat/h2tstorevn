import React, { useEffect, useState } from 'react'

import 'antd/dist/antd.min.css';
import './style.css';

import { Table, Spin, Radio, notification } from 'antd';
import queryString from 'query-string'
import { DeleteOutlined, HomeOutlined } from '@ant-design/icons';
import BreadCrumb from '../../components/common/BreadCrum'
import Containers from '../../components/common/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Format } from '../../services'
import { Link, useNavigate } from 'react-router-dom';
import { getCart, addCart, deleteCartItem, payment } from '../../redux/actions';

import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../../components/common/Button';
import useStateRef from 'react-usestateref';
import moment from 'moment';
const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/sale99k.png'


const Cart = () => {
    const auth = localStorage.getItem('token') ? true : false
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart())
    }, [])
    const [paymentTransfer, setPayment] = React.useState('Giao tận nơi');
    const cartLocal = useSelector(state => state.cart.cartLocal)
    const success = useSelector(state => state.cart.success)
    const cart = useSelector(state => state.cart.cart)
    const isLoading = useSelector(state => state.cart.isLoading)
    const [dataSource, setDataSource, dataSourceRef] = useStateRef(() => {
        return (auth ? (!isLoading && cart.data) : (!isLoading && cartLocal))
    })
    useEffect(() => {
        auth ?
            (!isLoading && setDataSource(cart.data)) :
            (!isLoading && setDataSource(cartLocal))
    }, [isLoading])
    const handleInQuantity = (record) => {
        setDataSource(pre => {
            return pre.map(item => {
                if (Number(item.ProductId) === Number(record.ProductId) && item.Size === record.Size && item.Color === record.Color)
                    return {
                        ...item,
                        Quantity: Number(item.Quantity) + 1
                    }
                else return item

            })
        }
        )
        dispatch(addCart(dataSourceRef.current.filter(item => {
            if (Number(item.ProductId) === Number(record.ProductId) && item.Size === record.Size && item.Color === record.Color)
                return item
        }).map(item => {
            return {
                ProductId: String(item.ProductId),
                Quantity: String(1),
                SalePrice: String(item.SalePrice),
                Size: item.Size,
                Color: item.Color
            }
        })[0]

        ))
    }
    const handleDeQuantity = (record) => {
        setDataSource(pre => {
            return pre.map(item => {
                if (Number(item.ProductId) === Number(record.ProductId) && item.Size === record.Size && item.Color === record.Color)
                    return {
                        ...item,
                        Quantity: item.Quantity > 1 ? item.Quantity - 1 : 1
                    }
                else return item

            })
        })
        dispatch(addCart(dataSourceRef.current.filter(item => {
            if (Number(item.ProductId) === Number(record.ProductId) && item.Size === record.Size && item.Color === record.Color)
                return item
        }).map(item => {
            return {
                ProductId: String(item.ProductId),
                Quantity: String(-1),
                SalePrice: String(item.SalePrice),
                Size: item.Size,
                Color: item.Color
            }
        })[0]

        ))
    }
    const deleteCart = async (record) => {
        const params = await dataSourceRef.current.filter(item => {
            if (Number(item.ProductId) === Number(record.ProductId) && item.Size === record.Size && item.Color === record.Color)
                return item
        }).map(item => {
            return {
                productId: String(item.ProductId),
                size: item.Size,
                color: item.Color
            }
        })[0]
        // console.log(params)
        if (!auth) {
            setDataSource(pre => {
                // return pre.filter(item => (Number(item.ProductId) !== Number(record.ProductId) & item.Size !== record.Size & item.Color !== record.Color & Number(item.Quantity) !== Number(record.Quantity)))
                return pre.filter((item, index) => index !== dataSourceRef.current.findIndex(item => (item.ProductId == record.ProductId & item.Name == record.Name && item.Size == record.Size)))
            }
            )
        } else {
            dispatch(deleteCartItem(queryString.stringify(params)))
            // console.log(dataSourceRef.current.filter(item => (Number(item.ProductId) !== Number(record.ProductId) & item.Size !== record.Size & item.Color !== record.Color & Number(item.Quantity) !== Number(record.Quantity))))
            // console.log(dataSourceRef.current.filter(item => (item.ProductId == record.ProductId & item.Name == record.Name && item.Size == record.Size & item.Color == record.Color)))
            // console.log(dataSourceRef.current.filter((item, index) => index !== dataSourceRef.current.findIndex(item => (item.ProductId == record.ProductId & item.Name == record.Name && item.Size == record.Size))))
            // console.log(dataSourceRef.current)
            setDataSource(pre => {
                // return pre.filter(item => (Number(item.ProductId) !== Number(record.ProductId) & item.Size !== record.Size & item.Color !== record.Color & Number(item.Quantity) !== Number(record.Quantity)))
                return pre.filter((item, index) => index !== dataSourceRef.current.findIndex(item => (item.ProductId == record.ProductId & item.Name == record.Name && item.Size == record.Size)))
            }
            )
        }
    }
    const styleBtnDe = {
        position: "absolute",
        top: "30%",
        right: "-25%",
        border: "1px solid",
        padding: "0 5px",
        zIndex: 1000,
        cursor: 'pointer',
        userSelect: 'none'
    }
    const styleBtnIn = {
        position: "absolute",
        top: "30%",
        left: "-25%",
        border: "1px solid",
        padding: "0 5px",
        zIndex: 1000,
        cursor: 'pointer',
        userSelect: 'none'
    }
    const columns = [
        { title: 'Tên hàng', dataIndex: 'Name', key: 'Name' },
        { title: 'Giá', dataIndex: 'SalePrice', key: 'SalePrice' },
        {
            key: 'Quantity', title: '',
            render: (record) => {
                return (
                    <p style={styleBtnDe}
                        onClick={() => { handleDeQuantity(record) }}
                    >-</p>
                )
            }
        },
        { title: 'Số lượng', dataIndex: 'Quantity', key: 'Quantity' },
        {
            key: 'Quantity', title: '',
            render: (record) => {
                return (
                    <p style={styleBtnIn}
                        onClick={() => { handleInQuantity(record) }}
                    >+</p>
                )
            }
        },
        { title: 'Kích cỡ', dataIndex: 'Size', key: 'Size' },
        { title: 'Màu', dataIndex: 'Color', key: 'Color' },
        {
            title: '', key: 'Delete',
            render: (record) => {
                return (
                    <DeleteOutlined onClick={() => {
                        deleteCart(record)
                    }} style={{ color: 'red' }} />
                )
            }
        }

    ];


    const handleTraferPayment = e => {
        // console.log('radio checked', e.target.value);
        setPayment(e.target.value);
    };
    const handlePayment = (e) => {
        e.preventDefault();
        // console.log(typeof moment(new Date()).format('DD-MM-YYYY'))
        // console.log(paymentTransfer)
        // const CartPayment = cart.data.map(item => {
        //     return {
        //         ProductId: item.ProductId,
        //         UnitOfMeasureId: item.UnitOfMeasureId,
        //         Quantity: item.Quantity,
        //         Amount: item.Quantity * item.SalePrice,
        //     }
        // })
        // console.log(cart.TotalPrice)
        const dataPayment = {
            OrderDate: moment(new Date()).format('DD-MM-YYYY'),
            Total: cart.TotalPrice,
            TransformMethod: paymentTransfer,
            CartPayment: cart.data.map(item => {
                return {
                    ProductId: item.ProductId,
                    UnitOfMeasureId: item.UnitOfMeasureId,
                    Quantity: item.Quantity,
                    SalePrice: item.SalePrice,
                    Amount: item.Quantity * item.SalePrice,
                }
            })
        }
        auth ?
            dispatch(payment(dataPayment))
            : navigate('/account/login');
        if (success) {
            notification.success({
                message: 'Thành công!',
                description: "",
                className: 'payment-success'
            })
        }
    }
    return (
        <div className='pages pages-cart'>
            <Header />
            <BreadCrumb name={`Giỏ hàng`} />
            <Containers>
                <div className="wrapper-cart-detail">
                    {isLoading ? <Spin className='spin-loading' size="large" tip="Loading..." /> :
                        <div className="container-fluid">
                            <div className="heading-page">
                                <div className="header-page">
                                    <h1>Giỏ hàng của bạn</h1>
                                    <p className="count-cart">Có <span>{(Array.isArray(cart) || !cart) ? 0 : cart.TotalQuantity} sản phẩm</span> trong giỏ hàng</p>
                                </div>
                            </div>
                            <div className="row wrapbox-content-cart">
                                <div className="contentCart-detail">
                                    <div className="main-cart">
                                        <Table
                                            rowKey={(record) => record.ProductId * Math.random() * 1000}
                                            pagination={false}
                                            columns={columns}
                                            dataSource={dataSourceRef.current}
                                        />
                                    </div>
                                </div>
                                <div className="info-cart-content">
                                    <div className="sidebox-order">
                                        <div className="sidebox-order-inner">
                                            <div className="sidebox-order_title">
                                                <h3>Thông tin đơn hàng</h3>
                                            </div>
                                            <div className="sidebox-order_total">
                                                <p>Tổng tiền:
                                                    <span className="total-price">{(Array.isArray(cart) || !cart) ? 0 + 'đ' : Format(cart.TotalPrice)}</span>
                                                </p>
                                            </div>
                                            <div className="sidebox-order_text">
                                                <p>Chọn phương thức thanh toán! <span style={{ color: '#999' }}>(Mặc định: Giao tận nơi!)</span></p>
                                                <Radio.Group defaultValue={'Giao tận nơi'} onChange={handleTraferPayment}>
                                                    <Radio value='Giao tận nơi'>Giao tận nơi</Radio>
                                                    <Radio value='Nhận tại cửa hàng'>Nhận tại cửa hàng</Radio>
                                                </Radio.Group>
                                            </div>
                                            <div className="sidebox-order_action">
                                                {/* <a href='/' className="button dark btncart-checkout">THANH TOÁN</a> */}
                                                <CustomButton onClick={handlePayment} name='THANH TOÁN' />
                                                <p className="link-continue text-center">
                                                    <Link to="/collections/all">
                                                        <i className="fa fa-reply"></i> Tiếp tục mua hàng
                                                    </Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="sidebox-group sidebox-policy visible-xs">
                                        <h4>Chính sách mua hàng</h4>
                                        <ul>
                                            <li>Sản phẩm được đổi 1 lần duy nhất, không hỗ trợ trả.</li>
                                            <li>Sản phẩm còn đủ tem mác, chưa qua sử dụng.</li>
                                            <li>Sản phẩm nguyên giá được đổi trong 30 ngày trên toàn hệ thống</li>
                                            <li>Sản phẩm sale chỉ hỗ trợ đổi size (nếu cửa hàng còn) trong 7 ngày trên toàn hệ thống.</li>
                                        </ul>
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

export default Cart