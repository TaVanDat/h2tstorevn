import { ADD_CART, REQUEST_DELETE_CART, REQUEST_PAYMENT_CART, PAYMENT, ADD_CART_LOCAL, INCREASE, DECREASE, ERROR, REMOVE_ITEM, REQUEST_GET_TO_CART, REQUEST_ADD_TO_CART, GET_CART_DETAIL } from "../actionsType";
const initialState = {
    isLoading: false,
    cart: [],
    message: '',
    success: false,
    cartLocal: [],

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
                message: 'SUCCESS',
                success: true,
            }

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
        case REQUEST_PAYMENT_CART:
            return {
                ...state,
                isLoading: true,
                message: 'REQUESTING',
            }
        case PAYMENT:
            return {
                ...state,
                isLoading: false,
                message: 'SUCCESS',
                success: true,
                cart: [],
            }
        case REQUEST_DELETE_CART:
            return {
                ...state,
                isLoading: true,
                message: 'REQUESTING',
            }
        case REMOVE_ITEM:
            return {
                ...state,
                isLoading: false,
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
        case ADD_CART_LOCAL:
            const productInCart = state.cartLocal.find((p) => p.ProductId = action.payload.ProductId)
            if (!productInCart) {
                return {
                    message: 'SUCCESS',
                    cartLocal: [...state.cartLocal, action.payload],
                };
            } else {
                let newCart = state.cartLocal;
                const objIndex = newCart.findIndex((obj) => obj.ProductId === action.payload.ProductId && obj.Size === action.payload.Size && obj.Color === action.payload.Color)
                if (Number(objIndex) === -1) {
                    console.log(objIndex)
                    // newCart[objIndex].Quantity = 2
                    return {
                        message: 'SUCCESS',
                        cartLocal: [...state.cartLocal, action.payload],
                    };
                }
                else {
                    newCart[objIndex].Quantity = newCart[objIndex].Quantity + action.payload.Quantity;
                    return { message: "SUCCESS!", cartLocal: [...newCart] };
                }
            }
        // return{
        //     ...state,
        // isLoading: false,
        // message: 'SUCCESS',
        // success: true,
        // }
        default:
            return state
    }
}
export default cartReducer;
