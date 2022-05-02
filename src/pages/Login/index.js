import React, { useEffect, useState } from 'react'

import './style.css'

import { notification } from 'antd'

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container'
import CustomButton from '../../components/common/Button'
import { Link, useNavigate } from 'react-router-dom'
import * as api from '../../api/apiClient'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const [display, setDisplay] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleDisplay = () => {
        setDisplay(false)
    }
    const login = async (e) => {
        e.preventDefault();
        await api.callApiHeaders("POST", 'authentication/login', { Email: email, Password: password })
            .then(res => {
                notification.success({
                    message: 'Đăng nhập thành công!',
                    description: '',
                    className: 'login_success'
                })
                localStorage.setItem('token', res.data.data.token)
                localStorage.setItem('user_id', res.data.data.data[0].Id)
                navigate('/account')

            })
            .catch(err => {
                notification.success({
                    message: 'Đăng nhập thất bại!',
                    description: '',
                    className: 'login_success'
                })
                navigate('/account/login')
            })

    }
    const recover = async (e) => {
        e.preventDefault();
        await api.callApiHeaders("POST", 'users/send/recover', { Email: email })
            .then(res => {
                notification.success({
                    message: 'Xin chờ mốt lát, mật khẩu mới đang gửi tới email của bạn!',
                    description: '',
                    className: 'recover_success'
                })
                setDisplay(true)
                // navigate('/account/login')


            })
            .catch(err => {
                notification.success({
                    message: 'Email không tồn tại!',
                    description: '',
                    className: 'recover_error'
                })
                // navigate('/account/login')
            })
    }
    const auth = localStorage.getItem('token');
    useEffect(() => {
        window.scrollTo(0, 0)
        auth && navigate('/account');
    }, [])
    return (
        <div className='pages page-login'>
            <Header />
            <Containers>
                <div className="page-login-container">
                    <div className="wrapbox-heading-account">
                        <div className="header-page">
                            <h1>Đăng nhập</h1>
                        </div>
                    </div>
                    <div className="wrapbox-content-account">
                        <div id="customer-login">
                            {display ?
                                <div id="login" className="userbox">
                                    <div className="accounttype">
                                        <h2 className="title"> </h2>
                                    </div>
                                    <form id="customer_login" onSubmit={login}>
                                        <div className="large_form">
                                            <label htmlFor="customer_email" className="icon-field"><i className="icon-login icon-envelope "></i></label>
                                            <input required type="email" onChange={handleEmail} id="customer_email" placeholder="Email" className="text" />
                                        </div>

                                        <div className="large_form  large_form-mr10">
                                            <label htmlFor="customer_password" className="icon-field"><i className="icon-login icon-shield"></i></label>
                                            <input required type="password" onChange={handlePassword} id="customer_password" placeholder="Mật khẩu" className="text" size="16" />
                                        </div>

                                        <div className="large_form sitebox-recaptcha">
                                            This site is protected by reCAPTCHA and the Google
                                            <Link to="https://policies.google.com/privacy" >Privacy Policy</Link>
                                            and <Link to="https://policies.google.com/terms" >Terms of Service</Link> apply.
                                        </div>
                                        <div className="action_account_custommer">
                                            <div className="action_bottom button dark">
                                                <CustomButton className='' name='Đăng nhập' style={{ width: 200 }} />
                                            </div>
                                            <div className="req_pass">
                                                <Link to="/account/login" onClick={handleDisplay}>Quên mật khẩu?</Link><br />
                                                hoặc <Link to="/account/register" title="Đăng ký">Đăng ký</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                :
                                <div id="recover-password" className="userbox">
                                    <div className="accounttype"><h2>Phục hồi mật khẩu</h2></div>
                                    <form onSubmit={recover}>
                                        <div className="large_form large_form-mr10">
                                            <label htmlFor="email" className="icon-field"><i className="icon-login icon-envelope "></i></label>
                                            <input required type="email" onChange={handleEmail} size="30" placeholder="Email" id="recover-email" className="text" />
                                        </div>
                                        <div className="large_form sitebox-recaptcha">
                                            This site is protected by reCAPTCHA and the Google
                                            <Link to="https://policies.google.com/privacy">Privacy Policy</Link>
                                            and <Link to="https://policies.google.com/terms">Terms of Service</Link> apply.
                                        </div>
                                        <div className="action_account_custommer">
                                            <div className="action_bottom button dark">
                                                <CustomButton name='Gửi' style={{ width: 100 }} />
                                            </div>
                                            <div className="req_pass">
                                                <Link to="/account/login" onClick={() => setDisplay(true)}>Hủy</Link>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </Containers>
            <Footer />
        </div>
    )
}

export default Login