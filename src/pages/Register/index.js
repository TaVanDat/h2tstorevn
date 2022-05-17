import React, { useEffect, useState } from 'react'

import 'antd/dist/antd.min.css';
import './style.css'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container'
import CustomButton from '../../components/common/Button'
import { useNavigate } from 'react-router-dom'
import * as api from '../../api/apiClient'
import {
    Form,
    Input,
    Select,
    Checkbox,
    Button, notification, DatePicker
} from 'antd';
const { Option } = Select;
const formItemLayout = {
    labelCol: {
        // xs: {
        //     span: 8,
        // },
        sm: {
            span: 9,
        },
    },
    wrapperCol: {
        // xs: {
        //     span: 24,
        // },
        // sm: {
        //     span: 16,
        // },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 12,
            offset: 10,
        },
        sm: {
            span: 15,
            offset: 7,
        },
    },
};
const Register = () => {
    const navigate = useNavigate()
    const [form] = Form.useForm();
    const onFinish = async (values) => {
        const value = {
            ...values,
            Dob: values.Dob.format('DD-MM-YYYY'),
            Image: 'account.png'
        }
        await api.callApiHeaders("POST", 'authentication/register', value)
            .then(res => {
                notification.success({
                    message: 'Đăng ký thành công, xin hãy đăng nhập lại!',
                    description: '',
                    className: 'register_success'
                })
                form.resetFields();
                navigate('/account/login')


            })
            .catch(err => {
                notification.success({
                    message: 'Email đã tồn tại!',
                    description: '',
                    className: 'register_error'
                })
                // navigate('/account/login')
            })
        console.log(value);
    };
    return (
        <div className='pages page-login'>
            <Header />
            <Containers>
                <div className="page-login-container">
                    <div className="wrapbox-heading-account">
                        <div className="header-page">
                            <h1>Đăng ký</h1>
                        </div>
                    </div>
                    <div className="wrapbox-content-account">
                        <div id="customer-login">
                            <Form
                                {...formItemLayout}
                                form={form}
                                name="register"
                                onFinish={onFinish}
                                scrollToFirstError
                            >
                                <Form.Item name="Name" rules={[{ required: true }]}>
                                    <Input placeholder='Họ và tên' />
                                </Form.Item>
                                <Form.Item
                                    name="Email"
                                    rules={[
                                        {
                                            type: 'email',
                                            message: 'Email chưa đúng định dạng!',
                                        },
                                        {
                                            required: true,
                                            message: 'Email không được để trống!',
                                        },
                                    ]}
                                >

                                    <Input placeholder='Email' />
                                </Form.Item>

                                <Form.Item
                                    name="Password"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Mật khẩu không được để trống!',
                                        },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password placeholder='Mật khẩu' />
                                </Form.Item>

                                <Form.Item
                                    name="Confirm"
                                    dependencies={['Password']}
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Xác thực mật khẩu!',
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(_, value) {
                                                if (!value || getFieldValue('Password') === value) {
                                                    return Promise.resolve();
                                                }

                                                return Promise.reject(new Error('Mật khẩu không khớp!'));
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password placeholder='Xác thực mật khẩu' />
                                </Form.Item>

                                <Form.Item
                                    name="UserName"
                                    tooltip="Bạn muốn người khác gọi bạn với tên gì?"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Tên người dùng không được để trống!',
                                            whitespace: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder='Tên người dùng' />
                                </Form.Item>
                                <Form.Item name="Dob"
                                    rules={[
                                        {
                                            type: 'object',
                                            required: true,
                                            message: 'Chọn ngày sinh!',
                                        }
                                    ]}
                                >
                                    <DatePicker placeholder='YYYY-MM-DD' />
                                </Form.Item>

                                <Form.Item name="Address" rules={[{ required: true }]}>
                                    <Input placeholder='Địa chỉ' />
                                </Form.Item>
                                <Form.Item
                                    name="Phone"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Điền số điện thoại!',
                                        },
                                        {
                                            validator(_, value) {
                                                if (Number(value) || !value) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject('Số điện thoại phải là số!');
                                            },

                                        },
                                        {
                                            pattern: /((09|03|07|08|05)+([0-9]{8})\b)/g,
                                            message: 'Không đúng định dạng'
                                        },
                                    ]}
                                >
                                    <Input placeholder='Số điện thoại' />
                                </Form.Item>
                                <Form.Item
                                    name="Gender"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Chọn giới tính!',
                                        },
                                    ]}
                                >
                                    <Select placeholder="Chọn giới tính">
                                        <Option value="Nam">Nam</Option>
                                        <Option value="Nữ">Nữ</Option>
                                        <Option value="Khác">Khác</Option>
                                    </Select>
                                </Form.Item>


                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                        {
                                            validator: (_, value) =>
                                                value ? Promise.resolve() : Promise.reject(new Error('Bạn chưa đồng ý với chính sách')),
                                        },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                        Tôi đồng ý với <a href="https://policies.google.com/privacy" target={'_blank'}>chính sách</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Đăng ký
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Containers>
            <Footer />
        </div>
    )
}

export default Register 
