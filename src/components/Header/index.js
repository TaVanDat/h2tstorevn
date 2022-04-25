import React, { useState } from 'react'

import Popup from 'reactjs-popup';

import { Link, NavLink } from 'react-router-dom'
import Containers from '../common/Container'

import './style.css'
import Button from '../common/Button';

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
    const [current, setCurrent] = React.useState(0);
    const handleClick = () => {
        setIsOpenned(wasOpened => !wasOpened);
    }
    const handleClickClose = () => (
        setIsOpenned(wasOpened => wasOpened)
    )
    const next = () => {
        setCurrent(current + 1);
    };

    const prev = () => {
        setCurrent(current - 1);
    };
    return (
        <div className='header'>
            <div className="header-topbar" id='header-top'>
                <p>Miễn phí vận chuyển với đơn hàng trên 500K</p>
            </div>
            <Containers>
                <div className="header-bottom">
                    <div className="header-logo">
                        <a href="/" className="home-link">
                            <img src={require("../../assets/images/logoH2T.png")} alt="H2T Shop" title="H2T Shop" />
                        </a>
                    </div>
                    <div className="header-nav">
                        <nav className="header-navigation">
                            <li><NavLink to='/'>Sản phẩm
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product'>Sale off 75%</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Áo
                                            <i className="fa-solid fa-angle-right icon-vertical"></i>
                                        </NavLink>{/**ao */}
                                        <ul className="submenu2">
                                            <li>
                                                <NavLink to='/product'>Áo thun</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product'>Áo polo</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product'>áo sơ mi</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Quần
                                            <i className="fa-solid fa-angle-right icon-vertical"></i>
                                        </NavLink>
                                        <ul className="submenu2">
                                            <li>
                                                <NavLink to='/product'>quần short</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product'>quần jeans</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product'>quần jogger_quần dài</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product'>quần tây_quần kaki</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Giày da</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Balo-túi sách</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product'>Phụ kiện khác</NavLink>
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
                                        <NavLink to='/pages/cua-hang-ha-noi'>Hà nội</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/cua-hang-bac-giang'>Bắc giang</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/cua-hang-hai-phong'>hải phòng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/cua-hang-thanh-hoa'>thanh hóa</NavLink>
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
                                        <NavLink to='/pages/chinh-sach-doi-tra'>cs đổi trả</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/pages/tk-ngan-hang'>tk ngân hàng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>kt đơn hàng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/'>Membership</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </nav>
                    </div>
                    <div className="header-user">
                        <div className="header-user-search">
                            <Link to='/'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </Link>
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
                                {!isOpenned ?
                                    <div className="header-user-account-dropdown" onClick={(e) => { handleClickClose(); e.stopPropagation() }}>
                                        <div id="header-login-panel" className='site_account-panel'>

                                            <div className="site_account_inner">
                                                {current === 0 ? (
                                                    <>
                                                        <header className='site_account_header'>
                                                            <h2 className='site-account_title'>Đăng nhập tài khoản</h2>
                                                            <p className="site_account_legend">Nhập email và mật khẩu của bạn:</p>
                                                        </header>
                                                        <form action="/account/login" className="customer_login">
                                                            <div className="customer_login_email">
                                                                <input type="text" className='email' placeholder='Email' />
                                                            </div>
                                                            <div className="customer_login_password">
                                                                <input type="text" className='password' placeholder='Password' />
                                                            </div>
                                                            <div className="site_recaptcha" style={{ color: 'rgb(180,180,180)', padding: '6px 0 0', fontSize: '13px', marginBottom: 12 }}>
                                                                This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' style={{ color: 'blue' }} target="_blank" rel="noreferrer">Privacy Policy</a>  and <a href="https://policies.google.com/terms" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Terms of Service</a>  apply.
                                                            </div>
                                                            <Button name='đăng nhập' />
                                                        </form>
                                                    </>
                                                ) :
                                                    (
                                                        <>
                                                            <header className='site_account_header'>
                                                                <h2 className='site-account_title'>khôi phục mật khẩu</h2>
                                                                <p className="site_account_legend">Nhập email của bạn:</p>
                                                            </header>
                                                            <form action="/account/recover" className="customer_login">
                                                                <div className="customer_login_email">
                                                                    <input type="text" className='email' placeholder='Email' />
                                                                </div>
                                                                <div className="site_recaptcha" style={{ color: 'rgb(180,180,180)', padding: '6px 0 0', fontSize: '13px', marginBottom: 12 }}>
                                                                    This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' style={{ color: 'blue' }} target="_blank" rel="noreferrer">Privacy Policy</a>  and <a href="https://policies.google.com/terms" style={{ color: 'blue' }} target="_blank" rel="noreferrer">Terms of Service</a>  apply.
                                                                </div>
                                                                <Button name='khôi phục' />
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
                                                <li><Link to="/account/logout">Đăng xuất</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                }
                            </Popup>
                        </div>
                        <div className="header-user-cart">
                            <Link to='/'>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </Containers>
        </div>
    )
}

export default Header