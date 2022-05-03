import { ADD_CART, ADD_CART_LOCAL, REQUEST_DELETE_CART, INCREASE, DECREASE, ERROR, REMOVE_ITEM, REQUEST_GET_TO_CART, REQUEST_ADD_TO_CART, GET_CART_DETAIL } from "../actionsType";

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