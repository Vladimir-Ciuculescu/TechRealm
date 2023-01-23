import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from './cart/cartReducer'
import { productsReducer } from './product/productReducer'
import { userReducer } from './user/userReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  user: userReducer,
})

export default persistReducer(persistConfig, rootReducer)
