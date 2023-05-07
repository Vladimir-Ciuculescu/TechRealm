import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { cartReducer } from './cart/cartReducer'
import { categoryMenuReducer } from './category_menu/categoryMenuReducer'
import { productsReducer } from './product/productReducer'
import { userReducer } from './user/userReducer'
import { manageProductsReducer } from './manage_products/manageProductsReducer'
import { modalsReducer } from './modals/modalsReducer'
import { manageUsersReducer } from './manage_users/manageUsersReducer'

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [
    'logoutModal',
    'manageProducts.products',
    'manageProducts.selectedProducts',
    'modals',
  ],
}

const rootReducer = combineReducers({
  product: productsReducer,
  cart: cartReducer,
  user: userReducer,
  categoryMenu: categoryMenuReducer,
  manageProducts: manageProductsReducer,
  manageUsers: manageUsersReducer,
  modals: modalsReducer,
})

export default persistReducer(persistConfig, rootReducer)
