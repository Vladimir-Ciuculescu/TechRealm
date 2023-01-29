import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'
import NavBar from './components/Navigation/Navbar'
import CartScreen from './pages/CartScreen'
import {
  CART_PATH,
  LOGIN_PATH,
  PRODUCTS_PATH,
  REGISTER_PATH,
  ROOT_PATH,
  SEARCH_PATH,
} from './constants/paths'
import RegisterScreen from './pages/RegisterScreen'
import LoginScreen from './pages/LoginScreen'
import OptionsBar from './components/Navigation/OptionsBar'
import SearchPage from './pages/SearchPage'

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

const App = () => {
  return (
    <div style={{ height: '100vh', background: '#f2f2f8' }}>
      <BrowserRouter>
        <NavBar />
        <OptionsBar />
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
