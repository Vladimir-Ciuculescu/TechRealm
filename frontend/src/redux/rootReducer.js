import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from './cart/cartReducer'
import { productsReducer } from './product/productReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
})

export default persistReducer(persistConfig, rootReducer)
