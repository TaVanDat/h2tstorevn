import { ADD_CART, ADD_CART_LOCAL, INCREASE, DECREASE, ERROR, REMOVE_ITEM, REQUEST_GET_TO_CART, REQUEST_ADD_TO_CART, GET_CART_DETAIL } from "../actionsType";
const initialState = {
    isLoading: false,
    cart: [],
    message: '',
    success: false,

}
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_GET_TO_CART:
            return {
                ...state,
                isLoading: true,
                cart: action.payload,
                message: 'REQUESTING',
            }
        case GET_CART_DETAIL:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                message: 'SUCCESS'
            }
        case REMOVE_ITEM:
            return state;
        case REQUEST_ADD_TO_CART:
            return {
                ...state,
                isLoading: true,
                cart: action.payload,
                message: 'REQUESTING',
            }
        case ADD_CART:
            return {
                ...state,
                isLoading: false,
                cart: action.payload,
                message: 'SUCCESS',
                success: true,
            }
        case INCREASE:
            return state;
        case DECREASE:
            return state;
        case ERROR:
            return {
                ...state,
                isLoading: false,
                message: 'FAILED',
                success: false,

            }
        default:
            return state
    }
}
export default cartReducer;