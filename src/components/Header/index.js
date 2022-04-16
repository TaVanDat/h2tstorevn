import React from 'react'

import { NavLink } from 'react-router-dom'
import Containers from '../common/Container'

import './style.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="header-topbar">
                <p>Miễn phí</p>
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
                            <li><NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sản phẩm
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale off 75%</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Áo
                                            <i className="fa-solid fa-chevron-down icon-vertical"></i>
                                        </NavLink>
                                        <ul className="submenu2">
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale sản phẩm mùa đông</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo sơ mi_ quần dài</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo thun_ quần short</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Quần
                                            <i className="fa-solid fa-chevron-down icon-vertical"></i>
                                        </NavLink>
                                        <ul className="submenu2">
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale sản phẩm mùa đông</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo sơ mi_ quần dài</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo thun_ quần short</NavLink>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Giày da</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Balo-túi sách</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Phụ kiện khác</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale up to 75%
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale sản phẩm mùa đông</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo sơ mi_ quần dài</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Sale áo thun_ quần short</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Địa chỉ store
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Hà nội</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Bắc giang</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>hải phòng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>thanh hóa</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>quảng ninh</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>cao bằng</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li><NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>H.Dẫn-C.Sách
                                <i className="fa-solid fa-chevron-down icon-down"></i>
                            </NavLink>
                                <ul className="submenu">
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>cs đổi trả</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>tk ngân hàng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>kt đơn hàng</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Membership</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Balo-túi sách</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/product' className={(isActive) => isActive ? "nav-active" : ''}>Phụ kiện khác</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </nav>
                    </div>
                    <div className="header-user">
                        <div className="header-user-search">
                            <NavLink to='/'>
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </NavLink>
                        </div>
                        <div className="header-user-account">
                            <NavLink to='/'>
                                <i className="fa-solid fa-circle-user"></i>
                            </NavLink>
                        </div>
                        <div className="header-user-cart">
                            <NavLink to='/'>
                                <i className="fa-solid fa-bag-shopping"></i>
                            </NavLink>
                        </div>
                    </div>
                </div>
            </Containers>
        </div>
    )
}

export default Header