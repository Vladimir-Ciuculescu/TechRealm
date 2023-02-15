import {
  CART_PATH,
  LOGIN_PATH,
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
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  BrowserRouter,
} from 'react-router-dom'
import NavBar from './Navbar'
import OptionsBar from './OptionsBar'
import Footer from '../Footer'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getCurrentUserApi } from '../../services/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import { setUserAccessAction, setUserAction } from '../../redux/user/actions'
import LogoutModal from '../LogoutModal'
import { Roles } from '../../enums/Roles'

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
]

const Navigation = () => {
  const { token, role } = useSelector(userSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const dispatch = useDispatch()

  const prevPath = useRef('')

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

  const hasAccess = (rolesAllowed: Roles[], role: Roles) => {
    const access = rolesAllowed.includes(role)

    return access
  }

  return (
    <BrowserRouter>
      <NavBar />
      <OptionsBar />
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={
              hasAccess(route.rolesAllowed, role) ? (
                route.element
              ) : (
                <Navigate to={'/'} />
              )
            }
          />
        ))}
      </Routes>
      <LogoutModal />
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation
