import React from 'react'

import './style.css';

import { Link } from 'react-router-dom';

import Containers from '../common/Container';
const urlImg = 'https://res.cloudinary.com/dbfjceflf/image/upload/v1651134903/h2tstore/';

const Footer = () => {
    return (
        <footer className='footer'>
            <Containers>
                <div className="main-footer">
                    <div className="intro-shop">
                        <h4 className="footer-title">CÔNG TY CỔ PHẦN THỜI TRANG H2T VIỆT NAM</h4>
                        <div className="footer-content">
                            <p>Địa chỉ: Số 1, ngõ 40, tổ 14 phố Nguyễn Thị Định, Phường Nhân Chính, Quận Thanh Xuân, Hà Nội<br />
                                Người đại diện: NGÔ TRÍ TÙNG<br />
                                Mã số thuế: 0106533311, ngày cấp ĐKKD 08/05/2014. Nơi cấp: Sở kế hoạch và đầu tư Hà Nội.</p>
                            <div className="logo-footer">
                                <a href="/" target="_blank" rel="noopener noreferrer">
                                    <img src={urlImg + 'logo_bct.png'} width={150} alt="Bộ công thương" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-privacy">
                        <h4 className="footer-title">Chính sách</h4>
                        <div className="footer-content">
                            <ul>
                                <li className="item"><a href="/pages/chinh-sach-doi-tra" title="CS ĐỔI TRẢ">CS ĐỔI TRẢ</a></li>
                                <li className="item"><a href="/pages/tk-ngan-hang" title="TK NGÂN HÀNG">TK NGÂN HÀNG</a></li>
                                <li className="item"><a href="/" title="KT ĐƠN HÀNG">KT ĐƠN HÀNG</a></li>
                                <li className="item"><a href="/" title="MEMBERSHIP">MEMBERSHIP</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-shop">
                        <h4 className="footer-title">Cửa hàng</h4>
                        <div className="footer-content">
                            <ul>
                                <li className="item"><Link to="/pages/cua-hang-ha-noi" title="HÀ NỘI">HÀ NỘI</Link></li>
                                <li className="item"><Link to="/pages/cua-hang-bac-giang" title="BẮC GIANG">BẮC GIANG</Link></li>
                                <li className="item"><Link to="/pages/cua-hang-hai-phong" title="HẢI PHÒNG">HẢI PHÒNG</Link></li>
                                <li className="item"><Link to="/pages/cua-hang-thanh-hoa" title="THANH HÓA">THANH HÓA</Link></li>
                                <li className="item"><Link to="/pages/cua-hang-quang-ninh" title="QUẢNG NINH">QUẢNG NINH</Link></li>
                                <li className="item"><Link to="/pages/cua-hang-cao-bang" title="CAO BẰNG">CAO BẰNG</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="customer-consulting">
                        <p className="customer-title">TƯ VẤN BÁN HÀNG</p>
                        <p className="number-phone">
                            <a href="tel:098.126.8781">
                                <i className="fa-solid fa-phone"></i>
                                098.126.8781
                            </a>
                        </p>
                        <p className="more-info">Tất cả các ngày trong tuần</p>
                        <div className="social">
                            <h4 className="footer-title">KẾT NỐI VỚI CHÚNG TÔI</h4>
                            <ul className="nav-social">
                                <li className="social-face"><a href="/" target="_blank" rel="nofollow"><i className="fa-brands fa-facebook-square"></i></a></li>
                                <li className="social-instagram"><a href="/" target="_blank" rel="nofollow"><i className="fa-brands fa-instagram"></i></a></li>
                                <li className="social-youtube"><a href="/" target="_blank" rel="nofollow"><i className="fa-brands fa-youtube"></i></a></li>
                                <li className="social-zalo"><Link to="/" target="_blank" rel="nofollow"><i className="fa fa-zalo"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="customer-care">
                        <p className="customer-title">CHĂM SÓC KHÁCH HÀNG</p>
                        <p className="number-phone">
                            <a href="tel:098.126.8781">
                                <i className="fa-solid fa-phone"></i>
                                098.126.8781
                            </a>
                        </p>
                        <p className="more-info">Tất cả các ngày trong tuần</p>
                    </div>
                </div>
            </Containers>
            <div className="bottom-footer">
                <Containers>
                    Copyright &copy; 2022 <Link to='/'>H2TSTORE</Link>. <a href="/" target="_blank">Powered by Haravan</a>
                </Containers>
            </div>
        </footer>
    )
}

export default Footer