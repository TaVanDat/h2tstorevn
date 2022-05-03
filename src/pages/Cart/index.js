import React, { useState } from 'react'

import 'antd/dist/antd.min.css';
import './style.css';
import { Table } from 'antd';
import { DeleteOutlined, HomeOutlined } from '@ant-design/icons';
import BreadCrumb from '../../components/common/BreadCrum'
import Containers from '../../components/common/Container'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { Format } from '../../services'
import { Link } from 'react-router-dom';
const url = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/sale99k.png'

const dataSource = [
    {
        key: 1,
        Name: 'John Brown',
        Price: 1000,
        Quantity: 32,
        Size: 'S',
        Color: 'Trắng'
    },
    {
        key: 2,
        Name: 'Jim Green',
        Price: 1000,
        Quantity: 42,
        Size: 'S',
        Color: 'Trắng'
    },
    {
        key: 3,
        Name: 'Not Expandable',
        Price: 1000,
        Quantity: 29,
        Size: 'S',
        Color: 'Trắng'
    },
    {
        key: 4,
        Name: 'Joe Black',
        Price: 1000,
        Quantity: 32,
        Size: 'S',
        Color: 'Trắng'
    },
];
const Cart = () => {
    const [data, setData] = useState(dataSource)
    const handleInQuantity = (record) => {
        setData(pre => {
            return pre.map(item => {
                if (Number(item.key) === Number(record.key))
                    // return {...pre,age:1}
                    // else return pre
                    return {
                        ...item,
                        Quantity: item.Quantity + 1
                    }
                else return item

            })
        }
        )
    }
    const handleDeQuantity = (record) => {
        setData(pre => {
            return pre.map(item => {
                if (Number(item.key) === Number(record.key))
                    // return {...pre,age:1}
                    // else return pre
                    return {
                        ...item,
                        Quantity: item.Quantity > 0 ? item.Quantity - 1 : 0
                    }
                else return item

            })
        })
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
        { title: '', dataIndex: 'Name', key: 'Name' },
        { title: '', dataIndex: 'Price', key: 'Price' },
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
        { title: '', dataIndex: 'Quantity', key: 'Quantity' },
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
        { title: '', dataIndex: 'Size', key: 'Size' },
        { title: '', dataIndex: 'Color', key: 'Color' },
        {
            title: '', key: 'Delete',
            render: (record) => {
                return (
                    <DeleteOutlined style={{ color: 'red' }} />
                )
            }
        }

    ];
    return (
        <div className='pages pages-cart'>
            <Header />
            <BreadCrumb name={`Giỏ hàng`} />
            <Containers>
                <div className="wrapper-cart-detail">
                    <div className="container-fluid">
                        <div className="heading-page">
                            <div className="header-page">
                                <h1>Giỏ hàng của bạn</h1>
                                <p className="count-cart">Có <span>4 sản phẩm</span> trong giỏ hàng</p>
                            </div>
                        </div>
                        <div className="row wrapbox-content-cart">
                            <div className="contentCart-detail">
                                <div className="main-cart">
                                    <Table
                                        showHeader={false}
                                        pagination={false}
                                        columns={columns}
                                        // rowSelection={{}}
                                        dataSource={data}
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
                                                <span className="total-price">2,320,000₫</span>
                                            </p>
                                        </div>
                                        <div className="sidebox-order_text">
                                            <p>Phí vận chuyển sẽ được tính ở trang thanh toán.<br />
                                                Bạn cũng có thể nhập mã giảm giá ở trang thanh toán.</p>
                                        </div>
                                        <div className="sidebox-order_action">
                                            <a href='/' className="button dark btncart-checkout">THANH TOÁN</a>
                                            <p className="link-continue text-center">
                                                <a href="/collections/all">
                                                    <i className="fa fa-reply"></i> Tiếp tục mua hàng
                                                </a>
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
                </div>
            </Containers>
            <Footer />
        </div>
    )
}

export default Cart