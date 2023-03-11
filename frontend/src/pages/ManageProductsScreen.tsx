import { Grid, Typography } from '@mui/material'
import { Container, Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddProductModal from '../components/Admin/AddProductModal'
import BulkActionsCard from '../components/Admin/BulkActionsCard'
import ProductsTable from '../components/Admin/ProductsTable'
import { setProductsAction } from '../redux/manage_products/actionts'
import { productsSelector } from '../redux/manage_products/selectors'
import { getProductsApi } from '../services/productApi'

const ManageProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector(productsSelector)
  const [addModal, toggleAddModal] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsApi()
      dispatch(
        setProductsAction(
          products!.map((item) => ({ ...item, checked: false })),
        ),
      )
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
              <BulkActionsCard toggleAddModal={() => toggleAddModal(true)} />
            </Grid>
            <Grid item>
              <ProductsTable products={products} />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      <AddProductModal
        open={addModal}
        closeModal={() => toggleAddModal(false)}
      />
    </Container>
  )
}

export default ManageProducts
