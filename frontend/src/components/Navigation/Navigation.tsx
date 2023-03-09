import {
  CART_PATH,
  LOGIN_PATH,
  MANAGE_PRODUCTS_PATH,
  PRODUCTS_PATH,
  REGISTER_PATH,
  ROOT_PATH,
  SEARCH_PATH,
} from '../../constants/paths'
import CartScreen from '../../pages/CartScreen'
import HomeScreen from '../../pages/HomeScreen'
import LoginScreen from '../../pages/LoginScreen'
import ProductScreen from '../../pages/ProductScreen'
import RegisterScreen from '../../pages/RegisterScreen'
import SearchPage from '../../pages/SearchPage'
import { Route, Routes } from 'react-router-dom'
import NavBar from './Navbar'
import OptionsBar from './OptionsBar'
import Footer from '../Footer'
import { useEffect } from 'react'
import { getCurrentUserApi } from '../../services/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import { setUserAction } from '../../redux/user/actions'
import LogoutModal from '../LogoutModal'
import { Roles } from '../../enums/Roles'
import CustomRoute from './CustomRoute'
import ManageProducts from '../../pages/ManageProducts'

interface RoutesProps {
  element: JSX.Element
  path: string
  rolesAllowed: Roles[]
}

const routes: RoutesProps[] = [
  {
    element: <HomeScreen />,
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
]

const Navigation = () => {
  const { token, role } = useSelector(userSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const getCurrentUser = async () => {
      const data = await getCurrentUserApi(token)
      const user = { ...data, token: token }
      dispatch(setUserAction(user))
    }

    if (isLogged) {
      getCurrentUser()
    }
  }, [])

  return (
    <>
      <NavBar />
      {role !== Roles.ADMIN && <OptionsBar />}

      <Routes>
        {routes.map((route, index) => (
          <Route
            path={route.path}
            element={
              <CustomRoute
                role={role}
                rolesAllowed={route.rolesAllowed}
                path={route.path}
              >
                {route.element}
              </CustomRoute>
            }
          />
        ))}
      </Routes>
      <LogoutModal />
      <Footer />
    </>
  )
}

export default Navigation
