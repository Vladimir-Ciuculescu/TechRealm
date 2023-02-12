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
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './Navbar'
import OptionsBar from './OptionsBar'
import Footer from '../Footer'
import { useEffect } from 'react'
import { getCurrentUserApi } from '../../services/userApi'
import { useDispatch, useSelector } from 'react-redux'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import { setUserAction } from '../../redux/user/actions'
import LogoutModal from '../LogoutModal'

interface RoutesProps {
  element: JSX.Element
  path: string
}

const routes: RoutesProps[] = [
  { element: <HomeScreen />, path: ROOT_PATH },
  { element: <ProductScreen />, path: `${PRODUCTS_PATH}/:id` },
  { element: <CartScreen />, path: CART_PATH },
  { element: <RegisterScreen />, path: REGISTER_PATH },
  { element: <LoginScreen />, path: LOGIN_PATH },
  { element: <SearchPage />, path: SEARCH_PATH },
]

const Navigation = () => {
  const { token } = useSelector(userSelector)
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
    <BrowserRouter>
      <NavBar />
      <OptionsBar />
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
      <LogoutModal />
      <Footer />
    </BrowserRouter>
  )
}

export default Navigation
