import React from 'react'

import { Link, NavLink } from 'react-router-dom'
import Containers from '../common/Container'

import './style.css'

const Header = () => {

    // const removeEvent = () => {
    //     liActive.current.classList.remove('active')
    // }
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
                            <div className="header-user-account-text">
                                <Link to='/'>
                                    <i className="fa-solid fa-circle-user"></i>
                                </Link>
                            </div>
                            <div className="header-user-account-dropdown">
                                <div id="header-login-panel" className='site_account-panel'>
                                    <header className='site_account_header'>
                                        <h2 className='site-account_title'>Đăng nhập tài khoản</h2>
                                        <p className="site_account_legend">Nhập email và mật khẩu của bạn:</p>
                                    </header>

                                </div>
                            </div>
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