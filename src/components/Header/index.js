import React, { useState } from 'react'

import './style.css'

import queryString from 'query-string'
import Popup from 'reactjs-popup';

import { Link, NavLink, useNavigate } from 'react-router-dom'
import Containers from '../common/Container'

import CustomButton from '../common/Button';
import { Form, Input, notification } from 'antd'
import { Logout } from '../../services'
import * as api from '../../api/apiClient'
const urlImg = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/';

const steps = [
    {
        content: ''
    },
    {
        content: ''
    }
]
const Header = () => {
    const [isOpenned, setIsOpenned] = useState(false);
    const [drop, setIsDrop] = useState(false);
    const [current, setCurrent] = React.useState(0);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [search, setSearch] = useState('')
    const navigate = useNavigate();
    // open dropdown account
    const handleClick = () => {
        auth ? setIsOpenned(wasOpened => !wasOpened) : setIsOpenned(wasOpened => wasOpened)
    }
    const handleClickClose = () => (
        setIsOpenned(wasOpened => !wasOpened)
    )
    // slide login => recover
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }
    const handlePassword = (e) => {
        setPassword(e.target.value)
    }
    const handleSearchForm = (e) => {
        setSearch(e.target.value)
    }
    // login
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
            })

    }
    const auth = localStorage.getItem('token');
    const onFinish = (values) => {
        console.log(values.q)
        const paramString = queryString.stringify({ q: values.q })
        navigate(`/search?${paramString}`)
    };
    const handleSearch = (values) => {
        const paramString = queryString.stringify({ q: values.target.value })
        console.log(values.target.value)
        navigate(`/search?${paramString}`)
    }

    return (
        <div className='header'>
            <div className="header-topbar" id='header-top'>
                <p>Miễn phí vận chuyển với đơn hàng trên 500K</p>
            </div>
            <Containers>
                <div className="header-bottom">
                    <div className="header-logo">
                        <a href="/" className="home-link">
                            <img src={urlImg + "logoH2T.png"} alt="H2T Shop" title="H2T Shop" />
                        </a>
                    </div>
                    <div className="header-nav">
                        <nav className="header-navigation">
                            <li><NavLink to='/'>Sản phẩm
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <Link to='/product'>Sale off 75%</Link>
                                    </li>
                                    <li>
                                        <Link to='/product'>Áo
                                            <i className="fa-solid fa-angle-right icon-vertical"></i>
                                        </Link>{/**ao */}
                                        <ul className="submenu2">
                                            <li>
                                                <Link to='/product'>Áo thun</Link>
                                            </li>
                                            <li>
                                                <Link to='/product'>Áo polo</Link>
                                            </li>
                                            <li>
                                                <Link to='/product'>áo sơ mi</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/product'>Quần
                                            <i className="fa-solid fa-angle-right icon-vertical"></i>
                                        </Link>
                                        <ul className="submenu2">
                                            <li>
                                                <Link to='/product'>quần short</Link>
                                            </li>
                                            <li>
                                                <Link to='/product'>quần jeans</Link>
                                            </li>
                                            <li>
                                                <Link to='/product'>quần jogger_quần dài</Link>
                                            </li>
                                            <li>
                                                <Link to='/product'>quần tây_quần kaki</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to='/product'>Giày da</Link>
                                    </li>
                                    <li>
                                        <Link to='/product'>Balo-túi sách</Link>
                                    </li>
                                    <li>
                                        <Link to='/product'>Phụ kiện khác</Link>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/collections/sale75'>Sale up to 75%
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>{/*sale up to 75% */}
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product'>Sale sản phẩm mùa đông</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Sale áo sơ mi_ quần dài</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Sale áo thun_ quần short</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/pages/hethongcuahang'>Địa chỉ store
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>{/* Address*/}
                                <ul className="submenu">
                                    <li>
                                        <Link to='/pages/cua-hang-ha-noi'>Hà nội</Link>
                                    </li>
                                    <li>
                                        <Link to='/pages/cua-hang-bac-giang'>Bắc giang</Link>
                                    </li>
                                    <li>
                                        <Link to='/pages/cua-hang-hai-phong'>hải phòng</Link>
                                    </li>
                                    <li>
                                        <Link to='/pages/cua-hang-thanh-hoa'>thanh hóa</Link>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/quang-ninh'>quảng ninh</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/cua-hang-cao-bang'>cao bằng</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/pages/huong-dan-chinh-sach'>H.Dẫn-C.Sách
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>{/*Hdan- Csach */}
                                <ul className="submenu">
                                    <li>
                                        <Link to='/pages/chinh-sach-doi-tra'>cs đổi trả</Link>
                                    </li>
                                    <li>
                                        <Link to='/pages/tk-ngan-hang'>tk ngân hàng</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>kt đơn hàng</Link>
                                    </li>
                                    <li>
                                        <Link to='/'>Membership</Link>
                                    </li>
                                </ul>
                            </li>
                        </nav>
                    </div>
                    <div className="header-user">
                        <div className="header-user-search" style={{ cursor: 'pointer' }}>
                            <Popup trigger={<i className="fa-solid fa-magnifying-glass"></i>}
                                position='bottom right'
                            >

                                {(close) => (
                                    <>
                                        <div className="search-form">
                                            <div className="btn-arrow"></div>
                                            <p className="title-search">Tìm kiếm</p>
                                            <div className="form-site">

                                                <Form
                                                    name="basic"
                                                    onFinish={(e) => { onFinish(e); close() }}
                                                    autoComplete="off"
                                                >
                                                    <Form.Item
                                                        name="q"
                                                    >
                                                        <Input id='inputSearchAuto' placeholder='Tìm kiếm sản phẩm...' />
                                                    </Form.Item>
                                                    <button className="btn-search btn" id="search-header-btn" aria-label="Tìm kiếm">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </Form>
                                            </div>
                                        </div>
                                    </>

                                )}
                            </Popup>
                            {/* <Popup
                                trigger={
                                    <i className="fa-solid fa-magnifying-glass"></i>
                                }
                            position="bottom center"
                            >
                                {(close) => {

                                    <div className="header-user-account-dropdown-search drop-search" style={{ zIndex: 1000 }}>
                                        <div id="header-login-panel" className='site_account-panel'>
                                            <div className="site_account_inner">
                                                <p className='site-account_title search'>Tìm kiếm</p>
                                                <Form
                                                    name="basic"
                                                    onFinish={onFinish}
                                                    autoComplete="off"
                                                >
                                                    <Form.Item
                                                        name="q"
                                                    >
                                                        <Input id='inputSearchAuto' placeholder='Tìm kiếm sản phẩm...' />
                                                    </Form.Item>
                                                    <button className="btn-search btn" id="search-header-btn" aria-label="Tìm kiếm">
                                                        <i className="fa-solid fa-magnifying-glass"></i>
                                                    </button>
                                                </Form>
                                            </div>
                                        </div>
                                    </div>
                                }}
                            </Popup> */}
                        </div>

                        <div className="header-user-account">
                            <Popup
                                trigger={
                                    <div className="header-user-account-text" onClick={handleClick}>
                                        <i className="fa-solid fa-circle-user"></i>
                                    </div>
                                }
                                position="bottom center"
                                closeOnDocumentClick>
                                {!auth ?
                                    <div className="header-user-account-dropdown" onClick={(e) => { handleClickClose(); e.stopPropagation() }}>
                                        <div id="header-login-panel" className='site_account-panel'>

                                            <div className="site_account_inner">
                                                {current === 0 ? (
                                                    <>
                                                        <header className='site_account_header'>
                                                            <h2 className='site-account_title'>Đăng nhập tài khoản</h2>
                                                            <p className="site_account_legend">Nhập email và mật khẩu của bạn:</p>
                                                        </header>
                                                        <form className="customer_login" onSubmit={login}>
                                                            <div className="customer_login_email">
                                                                <input type="email" onChange={e => handleEmail(e)} className='email' placeholder='Email' />
                                                            </div>
                                                            <div className="customer_login_password">
                                                                <input type="password" onChange={e => handlePassword(e)} className='password' placeholder='Password' />
                                                            </div>
                                                            <div className="site_recaptcha" style={{ color: 'rgb(180,180,180)', padding: '6px 0 0', fontSize: '13px', marginBottom: 12 }}>
                                                                This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' style={{ color: 'blue' }} target="_blank" rel="noreferrer">Privacy Policy</a>  and <a href="https://policies.google.com/terms" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Terms of Service</a>  apply.
                                                            </div>
                                                            <CustomButton name='đăng nhập' />
                                                        </form>
                                                    </>
                                                ) :
                                                    (
                                                        <>
                                                            <header className='site_account_header'>
                                                                <h2 className='site-account_title'>khôi phục mật khẩu</h2>
                                                                <p className="site_account_legend">Nhập email của bạn:</p>
                                                            </header>
                                                            <form className="customer_login" >
                                                                <div className="customer_login_email">
                                                                    <input type="text" className='email' placeholder='Email' />
                                                                </div>
                                                                <div className="site_recaptcha" style={{ color: 'rgb(180,180,180)', padding: '6px 0 0', fontSize: '13px', marginBottom: 12 }}>
                                                                    This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' style={{ color: 'blue' }} target="_blank" rel="noreferrer">Privacy Policy</a>  and <a href="https://policies.google.com/terms" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Terms of Service</a>  apply.
                                                                </div>
                                                                <CustomButton name='khôi phục' />
                                                            </form>
                                                        </>
                                                    )
                                                }
                                                {current < steps.length - 1 && (
                                                    <div className="site_account_secondary">
                                                        <p>Khách hàng mới?
                                                            <Link to='/account/register' style={{ color: '#e85205' }}>&nbsp;Tạo tài khoản</Link>
                                                        </p>
                                                        <p>Quên mật khẩu?
                                                            <button className="site-recover-password" onClick={() => next()}>&nbsp;Khôi phụ mật khẩu</button>
                                                        </p>
                                                    </div>
                                                )}
                                                {current > 0 && (
                                                    <div className="site_account_secondary">
                                                        <p>Bạn đã nhớ mật khẩu?
                                                            <button className="site-recover-password" onClick={() => prev()}>&nbsp;Trở về đăng nhập</button>
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className="header_action-auth" onClick={(e) => { handleClickClose(); e.stopPropagation() }}>
                                        <div id="siteNave-account" className='site_account_info'>
                                            <header className='site_account_header'>
                                                <h2 className='site-account_title'>thông tin tài khoản</h2>
                                            </header>
                                            <ul>
                                                <li><span>Ta Dat</span></li>
                                                <li><Link to="/account">Tài khoản của tôi</Link></li>
                                                <li><Link to="/account/update">Cập nhật tài khoản</Link></li>
                                                <li><Link to="/" onClick={Logout}>Đăng xuất</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </Popup>
                        </div>
                        <div className="header-user-cart">
                            {/* <Link to='/'> */}
                            {/* <i className="fa-solid fa-bag-shopping"></i> */}
                            {/* </Link> */}
                            <Popup trigger={<i className="fa-solid fa-bag-shopping"></i>}>
                                {(close) => (
                                    <form>
                                        <input type='text' placeholder='tim' />
                                        <button
                                            className="button"
                                            onClick={() => {
                                                console.log("modal closed ");
                                                close()
                                            }}
                                        >
                                            close modal
                                        </button>
                                    </form>
                                )}
                            </Popup>
                        </div>
                    </div>
                </div >
            </Containers >
        </div >
    )
}

export default Header