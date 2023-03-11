import React, { useState } from 'react'
import {
  Box,
  Button,
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
import { AiOutlinePlus } from 'react-icons/ai'
import { pink } from '@mui/material/colors'

interface BulkActionsCardProps {
  toggleAddModal: () => void
}

const BulkActionsCard: React.FC<any> = ({ toggleAddModal }) => {
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
      <Stack direction="row">
        <FormControlLabel
          control={
            <Checkbox
              disableRipple
              onChange={toggleAll}
              sx={{
                color: 'Violet.600',
                '&.Mui-checked': {
                  color: 'Violet.600',
                },
              }}
            />
          }
          label="Check all"
        />
        <Button
          onClick={toggleAddModal}
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
          <FaTrash style={{ fontSize: '20px', color: '#9c27b0' }} />
        </Stack>
      )}
    </Stack>
  )
}

export default BulkActionsCard
