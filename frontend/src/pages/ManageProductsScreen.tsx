import { Grid, IconButton, Typography, Container, Stack } from '@mui/material'
import { useTheme } from '@mui/material/styles'

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddProductModal from '../components/Admin/AddProductModal'
import BulkActionsCard from '../components/Admin/BulkActionsCard'
import DeleteProductModal from '../components/Admin/DeleteProductModal'
import ProductsTable from '../components/Admin/ProductsTable'
import {
  selectProductAction,
  setPagesAction,
  setProductsAction,
  setRowsPerPageAction,
  setSelectedProductsAction,
  unselectProductAction,
} from '../redux/manage_products/actions'
import {
  filterObjectSelector,
  productsSelector,
} from '../redux/manage_products/selectors'
import { getProductsApi, getProductsLengthApi } from '../services/productApi'
import CustomTable from '../components/common/CustomTable'
import { MdModeEditOutline } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import CustomCheckbox from '../components/common/CustomCheckbox'
import { Product } from '../interfaces/Product'
import { toggleDeleteProductModal } from '../redux/modals/actions'
import { ROWS_PER_PAGE_OPTIONS } from '../consts/filters/filters'
import { FilterObject } from '../interfaces/FilterObject'

const ManageProducts = () => {
  const dispatch = useDispatch()
  const products = useSelector(productsSelector)
  const filterObject = useSelector(filterObjectSelector)
  const { palette }: any = useTheme()
  const [rowsPerPage, setRowsPerPage] = useState(filterObject.rowsPerPage)
  const [page, setPage] = useState(1)
  const pages = filterObject.pages
  const [totalProducts, setTotalProducts] = useState(0)

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProductsApi(filterObject)
      const {
        data: { length },
      } = await getProductsLengthApi()

      setTotalProducts(length)

      dispatch(setPagesAction(Math.ceil(length / rowsPerPage)))

      dispatch(
        setProductsAction(
          products!.map((item) => ({ ...item, checked: false })),
        ),
      )
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    dispatch(setPagesAction(Math.ceil(totalProducts / rowsPerPage)))
    setPage(1)
  }, [rowsPerPage])

  //Whenever the number of displayed rows updates, update the number of pagination pages

  const toggleProduct = (product: Product) => {
    if (product.checked) {
      dispatch(unselectProductAction(product))
    } else {
      dispatch(dispatch(selectProductAction(product)))
    }
  }

  const selectProduct = (product: Product) => {
    dispatch(toggleDeleteProductModal(true))
    dispatch(setSelectedProductsAction([product]))
  }

  const setData = (data: any[], filterObject: any) => {
    const { rowsPerPage, pages } = filterObject

    dispatch(setProductsAction(data))
    dispatch(setRowsPerPageAction(rowsPerPage))
  }

  const getData = async (filterObject: FilterObject) => {
    const result = await getProductsApi(filterObject)
    setData?.(result!, filterObject)
  }

  interface HeadCell {
    id: string
    padding?: string

    label: any
    numeric?: boolean
    sortable: boolean
  }

  const headers: HeadCell[] = [
    {
      id: 'checked',
      sortable: false,
      label: null,
    },
    {
      id: 'defaultImage',
      sortable: false,
      label: (
        <Typography sx={{ color: palette.Base.White }}>Display</Typography>
      ),
    },
    {
      id: 'name',
      sortable: true,
      label: (
        <Typography sx={{ color: palette.Base.White }}>Product name</Typography>
      ),
    },

    {
      id: 'brand',
      sortable: true,
      label: <Typography sx={{ color: palette.Base.White }}>Brand</Typography>,
    },
    {
      id: 'countInStock',
      numeric: true,
      sortable: true,
      label: <Typography sx={{ color: palette.Base.White }}>Stoc</Typography>,
    },
    {
      id: 'price',
      numeric: true,
      sortable: true,
      label: <Typography sx={{ color: palette.Base.White }}>Price</Typography>,
    },
    {
      id: 'actions',
      sortable: false,
      label: (
        <Typography sx={{ color: palette.Base.White }}>Actions</Typography>
      ),
    },
  ]

  const columns = [
    {
      id: 'checked',
      label: 'checked',
      render: (row: Product) => {
        return (
          <CustomCheckbox
            checked={row.checked!}
            indeterminate={false}
            toggleCheck={() => toggleProduct(row)}
          />
        )
      },
    },
    {
      id: 'defaultImage',
      label: 'Image',
      render: (row: Product) => (
        <img
          src={row.defaultImage}
          style={{ width: '80px', height: '80px' }}
          alt={row.name}
        />
      ),
    },
    {
      id: 'name',
      label: 'name',
      render: (row: Product) => <Typography>{row.name}</Typography>,
    },
    {
      id: 'brand',
      label: 'brand',
      render: (row: Product) => <Typography>{row.brand}</Typography>,
    },
    {
      id: 'countInStock',
      label: 'stock',
      render: (row: Product) => <Typography>{row.countInStock}</Typography>,
    },
    {
      id: 'price',
      label: 'Price',
      render: (row: Product) => <Typography>{row.price} $</Typography>,
    },
    {
      id: 'actions',
      label: 'Actions',
      render: (row: Product) => (
        <Stack
          direction="row"
          gap="8px"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <IconButton disableRipple>
            <MdModeEditOutline style={{ fontSize: '25px', color: '#9c27b0' }} />
          </IconButton>
          <IconButton disableRipple onClick={() => selectProduct(row)}>
            <FaTrash style={{ fontSize: '20px', color: '#F04438' }} />
          </IconButton>
        </Stack>
      ),
    },
  ]

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Stack flexDirection="column" gap={7}>
        <Typography variant="h3" sx={{ fontFamily: 'Inter' }}>
          Manage Products
        </Typography>
        <Grid container>
          <Grid item md={2}>
            <Typography>Hello there</Typography>
          </Grid>
          <Grid container direction="column" item md={10} gap="24px">
            <Grid item>
              <BulkActionsCard />
            </Grid>

            <Grid item>
              <CustomTable
                pages={pages}
                rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
                rowsPerPage={rowsPerPage}
                setRowsPerPage={setRowsPerPage}
                data={products}
                getData={getData}
                columns={columns}
                headers={headers}
                page={page}
                setPage={setPage}
              />
            </Grid>
          </Grid>
        </Grid>
      </Stack>
      <AddProductModal />
      <DeleteProductModal />
    </Container>
  )
}

export default ManageProducts
