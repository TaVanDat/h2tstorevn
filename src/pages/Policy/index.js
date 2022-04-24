import React from 'react'

import './style.css'

import BreadCrumb from '../../components/common/BreadCrum';
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Containers from '../../components/common/Container';

const Policy = () => {
    return (
        <>
            <Header />
            <BreadCrumb name='Chính Sách Đổi Hàng Hóa Tại H2T' />
            <Containers>
                <div className="policy">
                    <div className="wrapper-policy">
                        <div className="heading-page">
                            <h1>Chính Sách Đổi Hàng Hóa Tại H2T</h1>
                        </div>
                        <div className="wrapper-content-page">
                            <div className="content-page">
                                <p><strong>QUY ĐỊNH ĐỔI SẢN PHẨM CỦA H2T</strong></p>
                                <p>H2T nhận trả hàng đối với các sản phẩm không giống như hình ảnh trên Website.</p>
                                <p><strong>BƯỚC 1: KIỂM TRA ĐIỀU KIỆN ĐỔI HÀNG</strong></p>
                                <p>Tất cả sản phẩm thỏa mãn tất cả điều kiện sau và không thuộc danh sách sản phẩm không được đổi hàng</p>
                                <p><strong>Điều kiện:</strong></p>
                                <ul>
                                    <li>Hàng đổi trong vòng 7 ngày kể từ khi nhận hàng ( tính theo dấu bưu điên ) </li>
                                    <li>Còn trong tình trạng ban đầu, còn tem, nhãn mác</li>
                                    <li>Chưa qua giặt, ủi hoặc bị bẩn, hư hỏng</li>
                                    <li>Đổi sản phẩm trong bao bì có dán mã sản phẩm bên ngoài.</li>
                                    <li>Đổi sản phẩm cùng Hóa đơn </li>
                                    <li>Đổi sản phẩm do hư hỏng từ phía H2T</li>
                                </ul>
                                <p><strong>BƯỚC 2: ĐÓNG GÓI SẢN PHẨM, CHỨNG TỪ VÀ GỬI VỀ H2T</strong></p>
                                <ul>
                                    <li>Hàng đổi trong vòng 7 ngày kể từ khi nhận hàng ( tính theo dấu bưu điên ) </li>
                                </ul>
                                <p><strong>BƯỚC 3: GỬI HOÀN</strong></p>
                                <ul>
                                    <li>H2T kiểm tra đơn hàng nếu là lỗi từ phía H2T thì bên H2T sẽ chịu toàn bộ chi phí và gửi hàng mới đến cho bạn.</li>
                                    <li>Trường hợp do quý khách muốn đổi hàng: Quý khách vui lòng thanh toán phí ship đổi hàng + phí tồn hàng  5% giá trị hàng. Nếu đổi hàng có giá trị thấp hơn thì tiền thừa của quý khách sẽ được lưu lại H2T để khấu trừ cho những lần mua hàng tiếp theo.</li>
                                </ul>
                                <p>Quý khách vui lòng xem rõ thông số sản phẩm trước khi mua hàng, tránh trường hợp mua về bị rộng quá hoặc chật quá không mặc được phải đổi lại.</p>
                                <p><em><strong>Những trường hợp KHÔNG đổi sản phẩm:</strong></em></p>
                                <ul>
                                    <li>Các sản phẩm thuộc chương trình giảm giá, khuyến mại, quà tặng.</li>
                                    <li>Các sản phẩm của khách hàng là Cộng Tác Viên, Các đơn mua sỉ.</li>
                                    <li>Sản phẩm mua về đã qua giặt là sử dụng hoặc không còn nguyên tem nhãn.</li>
                                    <li>Sản phẩm hư hỏng do lỗi của khách hàng.</li>
                                    <li>Sản phẩm hư hỏng do gặp trường hợp bất khả kháng trong quá trình vận chuyển như: thiên tai, hỏa hoạn...</li>
                                </ul>
                                <p>Cám ơn sự tin tưởng và ủng hộ của Quý khách!</p>
                                <p>Địa chỉ nhận hàng: 73 Cầu Diễn, Từ Liêm, Hà Nội. SĐT: <strong>0247.306.5859</strong></p>
                            </div>
                        </div>
                    </div>

                </div>
            </Containers>
            <Footer />
        </>
    )
}

export default Policy