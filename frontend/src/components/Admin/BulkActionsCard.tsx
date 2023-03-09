import React, { useState } from 'react'
import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { productsSelector } from '../../redux/manage_products/selectors'
import { FaTrash } from 'react-icons/fa'
import {
  selectAllProductsAction,
  unselectAllProductsAction,
} from '../../redux/manage_products/actionts'
import { Product } from '../../interfaces/Product'

const BulkActionsCard = () => {
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

  const checkedProducts = products.filter((item: Product) => item.checked)

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
      <FormControlLabel
        control={<Checkbox disableRipple onChange={toggleAll} />}
        label="Check all"
      />
      {checkedProducts.length > 0 && (
        <Stack direction="row" gap="12px" alignItems="center">
          <Typography>{checkedProducts.length} selected</Typography>
          <FaTrash style={{ fontSize: '20px', color: '#9c27b0' }} />
        </Stack>
      )}
    </Stack>
  )
}

export default BulkActionsCard
