import React, { useState, useEffect } from 'react'
import ProductCard from '../components/Product/ProductCard'
import { Product } from '../interfaces/Product'
import { Container } from '@mui/system'
import { Box, Grid, Typography } from '@mui/material'
import { getProductsApi } from '../services/productApi'
import { useNavigate } from 'react-router-dom'

const HomeScreen: React.FC<any> = (props) => {
  const [products, setProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  const fetchProducts = async () => {
    const products = await getProductsApi()
    if (products) {
      setProducts(products)
    }
  }

  useEffect(() => {
    const redirect = localStorage.getItem('redirect')

    if (redirect === 'true') {
      localStorage.removeItem('redirect')
      navigate(-2)
    }

    fetchProducts()
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
        <Typography variant="h3" sx={{ fontFamily: 'monospace' }}>
          Latest Products
        </Typography>
        <Grid container spacing={2} columns={4}>
          {products.map((product: Product, key) => (
            <Grid item xs={4} sm={2} md={1} key={key}>
              <ProductCard key={product.id} product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  )
}

export default HomeScreen
