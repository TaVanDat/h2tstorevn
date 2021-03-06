import React, { useEffect, useState } from 'react'

import 'antd/dist/antd.min.css';
import './style.css'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Tabs, Form, Input, Select, Button, DatePicker, notification } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Logout } from '../../services';
import * as api from '../../api/apiClient'

const { TabPane } = Tabs;
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

const Account = () => {
    const [form] = Form.useForm();
    const auth = localStorage.getItem('token');
    const userId = localStorage.getItem('user_id');
    const [user, setUser] = useState({});
    const [userUpdate, setUserUpdate] = useState({});
    const navigate = useNavigate();
    useEffect(() => {
        !auth ? navigate('/') :
            api.callApiHeaders('GET', `users/${userId}`)
                .then(res => {
                    setUser(res.data.data.data[0])
                })
                .catch(err => {
                    notification.error({
                        message: 'Error!',
                        description: '',
                        className: 'get-error'
                    })
                })
    }, [userUpdate])
    const onFinish = async (values) => {
        const value = {
            ...values,
            Dob: values.Dob.format('DD-MM-YYYY'),
            Image: ''
        }
        await api.callApi('PUT', 'users/update', value)
            .then(res => {
                notification.success({
                    message: 'C???p nh???t th??nh c??ng!',
                    description: '',
                    className: 'update-success'
                })
                setUserUpdate(value)
                form.resetFields()

            })
            .catch(() => {
                notification.success({
                    message: 'C???p nh???t th???t b???i!',
                    description: '',
                    className: 'update-error'
                })
            })
        // console.log('Received values of form: ', value);
    };
    const logout = () => {
        Logout();
        navigate('/')
    }
    return (
        <>
            <Header />
            <div className="layout-info-account">
                <div className="title-info-account">
                    <h1>T??i kho???n c???a b???n</h1>
                </div>
                <div className="container-account">
                    <div className="content-account">
                        <header>
                            <div className='content-left'>
                                <h3 className='content-left_title'>t??i kho???n</h3>
                            </div>
                            <div className="content-right">
                                <h3 className='content-right_title'>th??ng tin t??i kho???n</h3>
                            </div>
                        </header>

                        <Tabs tabPosition='left'>
                            <TabPane tab={<div className='content-left'><span>Th??ng tin t??i kho???n</span></div>} key="1">
                                <h2 className="name-account">{user.Name}</h2>
                                <p className="email">{user.Email}</p>
                                <p className="address-account">{user.Address}</p>
                                <p className="number-phone">{user.Phone}</p>
                            </TabPane>
                            <TabPane tab={<div className='content-left'><span>C???p nh???t t??i kho???n</span></div>} key="2">
                                <Form
                                    {...formItemLayout}
                                    form={form}
                                    name="User"
                                    onFinish={onFinish}
                                >
                                    <Form.Item name="Name" label="H??? v?? t??n" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item name="Dob" label="Ng??y sinh"
                                        rules={[
                                            {
                                                type: 'object',
                                                required: true,
                                                message: 'Please select time!',
                                            }
                                        ]}
                                    >
                                        <DatePicker />
                                    </Form.Item>

                                    <Form.Item
                                        name="Gender"
                                        label="Gi???i t??nh"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select gender!',
                                            },
                                        ]}
                                    >
                                        <Select placeholder="select your gender">
                                            <Option value="Nam">Nam</Option>
                                            <Option value="N???">N???</Option>
                                            <Option value="Kh??c">Kh??c</Option>
                                        </Select>
                                    </Form.Item>
                                    <Form.Item name="Address" label="?????a ch???" rules={[{ required: true }]}>
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="Phone"
                                        label="S??? ??i???n tho???i"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your phone number!',
                                            },
                                            {
                                                validator(_, value) {
                                                    if (Number(value) || !value) {
                                                        return Promise.resolve();
                                                    }
                                                    return Promise.reject('Phone number must be number!');
                                                },

                                            },
                                            {
                                                pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                                                message: 'Invalid phone number'
                                            },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item {...tailFormItemLayout}>
                                        <Button className='custom-btn' htmlType="submit">
                                            C???p nh???t
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane tab={<div className='content-left' onClick={logout}><span>????ng xu???t</span></div>} key="3">
                                Content of Tab 3
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Account