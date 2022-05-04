import { ADD_CART, PAYMENT, REQUEST_PAYMENT_CART, ADD_CART_LOCAL, REQUEST_DELETE_CART, INCREASE, DECREASE, ERROR, REMOVE_ITEM, REQUEST_GET_TO_CART, REQUEST_ADD_TO_CART, GET_CART_DETAIL } from "../actionsType";

import axios from "axios";

const url = "http://localhost:5000/api/v1/cart/";
const token = localStorage.getItem('token')
const auth = localStorage.getItem('token') ? true : false
export const getCart = () => async dispatch => {
    try {
        if (auth) {
            dispatch({ type: REQUEST_GET_TO_CART })
            const response = await axios.get(`${url}get-cart`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });
            dispatch({
                type: GET_CART_DETAIL,
                payload: response.data.data
            })
        }
        else {
            dispatch({
                type: GET_CART_DETAIL,
                payload: []
            })
        }

    } catch (error) {
        dispatch({
            type: ERROR,

        })
    }
}
export const addCart = (data) => async dispatch => {
    try {
        if (auth) {
            dispatch({ type: REQUEST_ADD_TO_CART })
            const response = await axios.post("http://localhost:5000/api/v1/cart/add", data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: ADD_CART,
                payload: response.data.data
            })
        } else {
            dispatch({
                type: ADD_CART_LOCAL,
                payload: data
            })
        }
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const deleteCartItem = (param) => async dispatch => {
    try {
        if (auth) {
            dispatch({ type: REQUEST_DELETE_CART })
            const response = await axios.delete(`http://localhost:5000/api/v1/cart/delete?${param}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: REMOVE_ITEM,
                payload: response.data.data
            })
        } else {
            dispatch({
                type: ADD_CART_LOCAL,
            })
        }
    } catch (error) {
        dispatch({ type: ERROR })
    }
}

export const payment = (data) => async dispatch => {
    try {
        if (auth) {
            dispatch({ type: REQUEST_PAYMENT_CART })
            const response = await axios.post("http://localhost:5000/api/v1/cart/payment", data, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch({
                type: PAYMENT,
            })
        }
    } catch (error) {
        dispatch({ type: ERROR })
    }
}