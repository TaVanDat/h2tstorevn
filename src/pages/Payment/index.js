/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'

import './style.css'
import {
    Row, Col, Card, Table, Button, Drawer,
    Modal, notification, Spin, Select
} from "antd";
import { EditOutlined, FileTextOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";
// import { API_URL } from '../../api/apiClient'
import axios from 'axios';
import useStateRef from 'react-usestateref';
import moment from 'moment'
import { Format } from '../../services/index'
import Header from '../../components/Header';
import BreadCrumb from '../../components/common/BreadCrum';
import Footer from '../../components/Footer';
import Containers from '../../components/common/Container';

const { Option } = Select


const API_URL = 'http://localhost:5000/api/v1'
function Payment() {
    const navigate = useNavigate()
    const auth = localStorage.getItem('token') ? true : false
    useEffect(() => {
        !auth && navigate('/')
    }, [])
    const [dataUser, setDataUser, dataUserRef] = useStateRef([])
    const [isEditing, setIsEditing] = useState(false)
    const [isAdding, setIsAdding] = useState(false)
    const [isDataEdit, setIsDataEdit, isDataEditRef] = useStateRef([])
    const [isAddNew, setIsAddNew] = useState({})
    const [success, setSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const fetchData = async () => {
        const response = await axios.get(`${API_URL}/bill/all`)
        if (response && response.data) {
            setDataUser(response.data.data.data)
            setIsLoading(false)
            setSuccess(false)
            // console.log(dataUserRef.current)
        }
    }


    useEffect(() => {
        fetchData()
    }, [success, isLoading])

    const columns = [
        {
            title: "Mã hóa đơn",
            dataIndex: "Code",
            key: "Code",
            width: 10,
        },
        {
            title: "Khách hàng",
            dataIndex: "Account",
            key: "Account",
            width: 30,
        },
        {
            title: "Thành tiền",
            key: "Total",
            width: 30,
            render(record) {
                return (
                    <>
                        {Format(record.Total)}
                    </>
                );
            }
        },
        {
            title: "Ngày đặt",
            key: "OrderDate",
            width: 50,
            render(record) {
                return (
                    <div>
                        {moment(record.OrderDate).format('DD-MM-YYYY')}
                    </div>
                );
            }
        },
        {
            title: "Trạng thái",
            key: "StatusId",
            width: 100,
            // dataIndex: "StatusId",
            render(record) {
                return (
                    <div>
                        {Number(record.StatusId) === 3 ? 'Đang chờ' : (Number(record.StatusId) === 4 ? 'Đã duyệt' : 'Đã hủy')}

                    </div>
                );
            }

        },
        {
            title: "Phương thức vận chuyển",
            key: "TransformMethod",
            width: 150,
            dataIndex: "TransformMethod",

        },
        {
            title: "Hành động",
            key: "Action",
            width: 100,
            render(record) {
                return (
                    <div>
                        <FileTextOutlined onClick={() => {
                            handleDetailBill(record)
                        }}

                            style={{ color: 'aqua', cursor: 'pointer', fontSize: 20, marginRight: 10 }} />
                    </div>
                );
            },
        },
    ];
    const columnsDetail = [
        {
            title: "Tên sản phẩm",
            dataIndex: "Name",
            key: "Name",
            width: 300
        },
        {
            title: "Số lượng",
            dataIndex: "Quantity",
            key: "Quantity",
            width: 100
        },
        {
            title: "Đơn giá",
            key: "Price",
            width: 100,

            render(record) {
                return (
                    <>
                        {Format(record.Price)}
                    </>
                );
            }
        },
        {
            title: "Thành tiền",
            key: "Amount",
            width: 100,
            render(record) {
                return (
                    <>
                        {Format(record.Amount)}
                    </>
                );
            }
        },

    ];

    const handleDetailBill = async (record) => {
        setIsEditing(true);
        await axios.get(`${API_URL}/bill/${record.Id}`)
            .then(res => {
                setIsDataEdit(res.data.data.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (
        <>
            <Header />
            <BreadCrumb name='Kiểm tra đơn hàng' />
            <Containers>
                {dataUserRef.current &&
                    <div className="tabled">
                        <Row gutter={[24, 0]}>
                            <Col xs="24" xl={24}>
                                <Card
                                    bordered={false}
                                    className="criclebox tablespace mb-24"
                                    title="Danh sách hóa đơn"
                                >
                                    <div className="table-responsive" >
                                        <Table
                                            rowKey={dataUserRef.current.map(item => { return (item.Id) })}
                                            columns={columns}
                                            dataSource={dataUserRef.current}
                                            pagination={{ pageSize: 5 }}
                                            className="ant-border-space"
                                        />
                                        <Drawer
                                            title="Hóa đơn chi tiết"
                                            width={720}
                                            bodyStyle={{ paddingBottom: 80 }}
                                            onClose={() => {
                                                setIsEditing(false)
                                            }}
                                            visible={isEditing}
                                        >
                                            <Row gutter={[24, 0]}>
                                                <Table
                                                    rowKey={isDataEditRef.current.map(item => { return (item.Id) })}
                                                    columns={columnsDetail}
                                                    dataSource={isDataEditRef.current}
                                                    pagination={{ pageSize: 5 }}
                                                    className="ant-border-space"
                                                />
                                            </Row>

                                        </Drawer>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                }
            </Containers>
            <Footer />
        </>
    );
}

export default Payment;
