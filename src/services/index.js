// import * as api from '../api/apiClient'

import { notification } from 'antd'


export const Logout = async () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
    notification.success({
        message: 'Đăng xuất thành công!',
        description: '',
        className: 'logout-success'
    })
}

export const Format = (number) => {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, ',') + 'đ'
}

