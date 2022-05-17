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
    const [isDataEdit, setIsDataEdit] = useState({})
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

    const handleChangeStatus = async (record, e) => {
        const dataStatus = { Id: record.Id, StatusId: e }
        // update-bill
        await axios.put(`${API_URL}/bill/update-bill`, dataStatus, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => {
                notification.success({
                    message: 'Update Success',
                    description: '',
                    className: 'update-success'
                })
                setIsLoading(false)
                setSuccess(true)
            })
            .catch(err => {
                notification.error({
                    message: 'Update Error' + err,
                    description: '',
                    className: 'update-error'
                })
                setSuccess(false)
            })
        console.log(dataStatus)
    }
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
            width: 100,
            dataIndex: "TransformMethod",

        },
        {
            title: "Hành động",
            key: "Action",
            width: 100,
            render() {
                return (
                    <div>
                        <FileTextOutlined style={{ color: 'aqua', cursor: 'pointer', fontSize: 20, marginRight: 10 }} />
                    </div>
                );
            },
        },
    ];


    return (
        <>
            <Header />
            <BreadCrumb name='Kiểm tra đơn hàng' />
            <Containers>
                <div className="tabled">
                    <Row gutter={[24, 0]}>
                        <Col xs="24" xl={24}>
                            <Card
                                bordered={false}
                                className="criclebox tablespace mb-24"
                                title="Danh sách hóa đơn"
                            >
                                <div className="table-responsive" >
                                    {isLoading ? <Spin /> :
                                        <Table
                                            rowKey={dataUserRef.current.map(item => { return (item.Id) })}
                                            columns={columns}
                                            dataSource={dataUserRef.current}
                                            pagination={{ pageSize: 5 }}
                                            className="ant-border-space"
                                        />
                                    }
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Containers>
            <Footer />
        </>
    );
}

export default Payment;
