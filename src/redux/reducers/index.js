import { combineReducers } from 'redux';

import cartReducer from './cartReducer';

const rootReducer = combineReducers({
    cart: cartReducer
})
export default (state, action) => rootReducer(state, action);