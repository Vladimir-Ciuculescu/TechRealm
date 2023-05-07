import {
  CART_PATH,
  LOGIN_PATH,
  MANAGE_PRODUCTS_PATH,
  MANAGE_USERS_PATH,
  PRODUCTS_PATH,
  REGISTER_PATH,
  ROOT_PATH,
  SEARCH_PATH,
} from '../../constants/paths'
import { Roles } from '../../enums/Roles'
import CartScreen from '../../pages/CartScreen'
import LoginScreen from '../../pages/LoginScreen'
import ManageProducts from '../../pages/ManageProductsScreen'
import ManageUsersScreen from '../../pages/ManageUsersScreen'
import ProductScreen from '../../pages/ProductScreen'
import ProductsScreen from '../../pages/ProductsScreen'
import RegisterScreen from '../../pages/RegisterScreen'
import SearchPage from '../../pages/SearchPage'

interface RoutesProps {
  element: JSX.Element
  path: string
  rolesAllowed: Roles[]
}

export const routes: RoutesProps[] = [
  {
    element: <ProductsScreen />,
    path: ROOT_PATH,
    rolesAllowed: [Roles.UNLOGGED, Roles.CLIENT, Roles.ADMIN],
  },
  {
    element: <ProductScreen />,
    path: `${PRODUCTS_PATH}/:id`,
    rolesAllowed: [Roles.UNLOGGED, Roles.CLIENT, Roles.ADMIN],
  },
  {
    element: <CartScreen />,
    path: CART_PATH,
    rolesAllowed: [Roles.UNLOGGED, Roles.CLIENT],
  },
  {
    element: <RegisterScreen />,
    path: REGISTER_PATH,
    rolesAllowed: [Roles.UNLOGGED],
  },
  {
    element: <LoginScreen />,
    path: LOGIN_PATH,
    rolesAllowed: [Roles.UNLOGGED],
  },
  {
    element: <SearchPage />,
    path: SEARCH_PATH,
    rolesAllowed: [Roles.UNLOGGED, Roles.CLIENT],
  },
  {
    element: <ManageProducts />,
    path: MANAGE_PRODUCTS_PATH,
    rolesAllowed: [Roles.ADMIN],
  },
  {
    element: <ManageUsersScreen />,
    path: MANAGE_USERS_PATH,
    rolesAllowed: [Roles.ADMIN],
  },
]
