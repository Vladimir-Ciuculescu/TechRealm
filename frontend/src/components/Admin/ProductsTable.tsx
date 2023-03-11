import React from 'react'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Checkbox from '@mui/material/Checkbox'
import { Product } from '../../interfaces/Product'
import { Chip, Stack } from '@mui/material'
import { MdModeEditOutline } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import {
  selectProductAction,
  unselectProductAction,
} from '../../redux/manage_products/actionts'

interface RowProps {
  product: Product
}

const Row: React.FC<RowProps> = ({ product }) => {
  const { name, brand, price, countInStock, defaultImage } = product

  console.log(product.checked)

  const dispatch = useDispatch()

  const selectProduct = (product: Product) => {
    if (product.checked) {
      dispatch(unselectProductAction(product))
    } else {
      dispatch(dispatch(selectProductAction(product)))
    }
  }

  return (
    <TableRow sx={{ bgcolor: product.checked ? 'Violet.100' : 'inherit' }}>
      <TableCell padding="checkbox">
        <Checkbox
          sx={{
            color: 'Violet.600',
            '&.Mui-checked': {
              color: 'Violet.600',
            },
          }}
          checked={product.checked}
          onChange={() => selectProduct(product)}
          disableRipple
        />
      </TableCell>
      <TableCell>
        <img
          src={defaultImage}
          alt="product"
          style={{ width: '80px', height: '80px' }}
        />
      </TableCell>
      <TableCell>
        <Typography>{name}</Typography>
      </TableCell>
      <TableCell>
        <Chip label={brand} />
      </TableCell>
      <TableCell align="left">
        <Typography>{countInStock}</Typography>
      </TableCell>
      <TableCell>
        <Typography>{price} $</Typography>
      </TableCell>
      <TableCell align="center">
        <Stack
          direction="row"
          gap="8px"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <MdModeEditOutline style={{ fontSize: '25px', color: '#9c27b0' }} />
          <FaTrash style={{ fontSize: '20px', color: '#F04438' }} />
        </Stack>
      </TableCell>
    </TableRow>
  )
}

interface ProductsTableProps {
  products: Product[]
}

const ProductsTable: React.FC<ProductsTableProps> = ({ products }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size="medium"
          >
            <TableBody>
              {products.map((product) => (
                <Row product={product} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  )
}

export default ProductsTable
