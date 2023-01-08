import React, { useState, useEffect } from 'react'
import ProductCard from '../components/Product/ProductCard'
import { Product } from '../interfaces/Product'
import { Container } from '@mui/system'
import { Box, Grid, Typography } from '@mui/material'
import { axiosInstance } from '../services/axiosInstance'

interface IProps {}

const HomeScreen: React.FC<IProps> = () => {
  const [products, setProducts] = useState<Product[]>([])

  const fetchProducts = async () => {
    const { data } = await axiosInstance.get('/api/products')

    setProducts(data)
  }

  useEffect(() => {
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
