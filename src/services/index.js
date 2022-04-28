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

