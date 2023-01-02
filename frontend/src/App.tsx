import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'
import NavBar from './components/Navbar'
import CartScreen from './pages/CartScreen'

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="main-app">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
