import React, { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { productsSelector } from '../../redux/manage_products/selectors'
import { FaTrash } from 'react-icons/fa'
import {
  selectAllProductsAction,
  setSelectedProductsAction,
  unselectAllProductsAction,
} from '../../redux/manage_products/actions'
import { Product } from '../../interfaces/Product'
import { AiOutlinePlus } from 'react-icons/ai'
import {
  toggleAddProductModal,
  toggleDeleteProductModal,
} from '../../redux/modals/actions'
import CustomCheckbox from '../common/CustomCheckbox'

const BulkActionsCard: React.FC<any> = () => {
  const products = useSelector(productsSelector)
  const [checked, setChecked] = useState(false)
  const dispatch = useDispatch()

  const toggleAll = () => {
    if (checked) {
      dispatch(unselectAllProductsAction())
    } else {
      dispatch(selectAllProductsAction(products))
    }
    setChecked(!checked)
  }

  const allChecked = products.every((product: Product) => product.checked)
  const someChecked = products.some((product: Product) => product.checked)

  const checkedProducts = products.filter((item: Product) => item.checked)

  const openAddModal = () => {
    dispatch(toggleAddProductModal(true))
  }

  const openDeleteModal = () => {
    dispatch(
      setSelectedProductsAction(
        products.filter((item: Product) => item.checked),
      ),
    )
    dispatch(toggleDeleteProductModal(true))
  }

  return (
    <Stack
      direction="row"
      sx={{
        width: '100%',
        background: '#FFFFFF',
        borderRadius: '8px',
        height: '70px',
        padding: '16px',
      }}
      justifyContent="space-between"
      alignItems="center"
    >
      <Stack direction="row" alignItems="center">
        <CustomCheckbox
          checked={allChecked}
          indeterminate={!allChecked && someChecked}
          toggleCheck={toggleAll}
        />
        <Button
          onClick={openAddModal}
          startIcon={<AiOutlinePlus />}
          disableRipple
          sx={{
            color: 'Violet.600',
            textTransform: 'none',
            ':hover': {
              bgcolor: 'inherit',
            },
          }}
        >
          Add product
        </Button>
      </Stack>
      {checkedProducts.length > 0 && (
        <Stack direction="row" gap="12px" alignItems="center">
          <Typography>{checkedProducts.length} selected</Typography>
          <IconButton disableRipple onClick={openDeleteModal}>
            <FaTrash style={{ fontSize: '20px', color: '#9c27b0' }} />
          </IconButton>
        </Stack>
      )}
    </Stack>
  )
}

export default BulkActionsCard
