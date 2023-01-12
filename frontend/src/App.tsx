import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'
import NavBar from './components/Navbar'
import CartScreen from './pages/CartScreen'
import {
  CART_PATH,
  PRODUCTS_PATH,
  REGISTER_PATH,
  ROOT_PATH,
} from './constants/paths'
import RegisterScreen from './pages/RegisterScreen'

const App = () => {
  return (
    <div style={{ height: '100vh', background: '#f2f2f8' }}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path={ROOT_PATH} element={<HomeScreen />} />
          <Route path={`${PRODUCTS_PATH}/:id`} element={<ProductScreen />} />
          <Route path={CART_PATH} element={<CartScreen />} />
          <Route path={REGISTER_PATH} element={<RegisterScreen />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
