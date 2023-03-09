import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Typography,
} from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import ProductsTable from '../components/Admin/ProductsTable'
import { Product } from '../interfaces/Product'
import { getProductsApi } from '../services/productApi'

const ManageProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [itemsIds, setItemsIds] = useState<number[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsApi()
      setProducts(products!)
    }
    fetchProducts()
  }, [])

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Stack flexDirection="column" gap={7}>
        <Typography variant="h3" sx={{ fontFamily: 'monospace' }}>
          Manage Products
        </Typography>
        <Grid container>
          <Grid item md={2}>
            <Typography>Hello there</Typography>
          </Grid>
          <Grid container direction="column" item md={10} gap="24px">
            <Grid item>
              <Stack
                direction="row"
                sx={{
                  width: '100%',
                  background: '#FFFFFF',
                  borderRadius: '8px',
                  height: '70px',
                  padding: '16px',
                }}
              >
                <FormControlLabel control={<Checkbox />} label="Check all" />
              </Stack>
            </Grid>
            <Grid item>
              <ProductsTable products={products} />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  )
}

export default ManageProducts
