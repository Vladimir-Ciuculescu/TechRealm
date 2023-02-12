import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from './cart/cartReducer'
import { categoryMenuReducer } from './category_menu/categoryMenuReducer'
import { logoutModalReducer } from './logout_modal/logoutModalReducer'
import { productsReducer } from './product/productReducer'
import { userReducer } from './user/userReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['logoutModal'],
}

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  user: userReducer,
  categoryMenu: categoryMenuReducer,
  logoutModal: logoutModalReducer,
})

export default persistReducer(persistConfig, rootReducer)
