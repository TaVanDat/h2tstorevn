
import axios from 'axios';
const API_URL = 'http://localhost:5000/api/v1'
export const callApi = async (method, endpoint, body) => {
    return (
        await axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body,
            headers: {
                "Content-type": "application/json",
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        })
    )
}
export const callApiHeaders = async (method, endpoint, body) => {
    return (
        await axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
            data: body,
            headers: {
                "Content-type": "application/json",
            }
        })
    )
}
export const callApiDefault = async (method, endpoint) => {
    return (
        await axios({
            method: method,
            url: `${API_URL}/${endpoint}`,
        })
    )
}