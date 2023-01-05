import Footer from './components/Footer'
import HomeScreen from './pages/HomeScreen'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProductScreen from './pages/ProductScreen'
import NavBar from './components/Navbar'
import CartScreen from './pages/CartScreen'
import { Box } from '@mui/material'

const App = () => {
  return (
    // <Box sx={{ background: '#f2f2f8' }}>

    // </Box>
    <div style={{ height: '100vh', background: '#f2f2f8' }}>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
