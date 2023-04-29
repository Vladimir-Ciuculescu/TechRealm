import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import { useDispatch, useSelector } from 'react-redux'
import { toggleDeleteProductModal } from '../../redux/modals/actions'
import {
  productsSelector,
  selectedProductSelector,
} from '../../redux/manage_products/selectors'
import { modalsSelector } from '../../redux/modals/selectors'
import CustomButton from '../common/CustomButton'
import { deleteProductApi } from '../../services/productApi'
import { setProductsAction } from '../../redux/manage_products/actions'
import { Product } from '../../interfaces/Product'
import { toast } from 'react-toastify'

const DeleteProductModal: React.FC<any> = () => {
  const dispatch = useDispatch()
  const { deleteProductModal } = useSelector(modalsSelector)
  const selectedProduct = useSelector(selectedProductSelector)
  const products = useSelector(productsSelector)

  const [loading, setLoading] = useState(false)

  const closeModal = () => {
    dispatch(toggleDeleteProductModal(false))
  }

  const deleteProduct = async () => {
    setLoading(true)

    try {
      await deleteProductApi([selectedProduct])
      dispatch(
        setProductsAction(
          products.filter((item: Product) => item.id !== selectedProduct.id),
        ),
      )
      closeModal()
      setLoading(false)
      toast.info('Product succesfully deleted !')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Dialog
      open={deleteProductModal}
      onClose={closeModal}
      sx={{ backdropFilter: 'blur(8px)' }}
      PaperProps={{
        sx: {
          width: '560px',
          borderRadius: '16px',
          boxShadow:
            '0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)',
          bgcolor: 'Base.White',
        },
      }}
    >
      <DialogTitle>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="TEXT_LG_SEMIBOLD">Delete product</Typography>
          <IconButton disableRipple onClick={closeModal}>
            <CgClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography variant="TEXT_LG_REGULAR">
          Are you sure you want to delete this ?
        </Typography>
      </DialogContent>
      <DialogActions sx={{ padding: '32px 32px 24px 32px' }}>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ width: '100%' }}
          gap="12px"
        >
          <CustomButton
            onClick={closeModal}
            variant="outlined"
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Gray.700' }}>
              No
            </Typography>
          </CustomButton>

          <CustomButton
            loading={loading}
            onClick={deleteProduct}
            variant="contained"
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
              bgcolor: 'Gray.900',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Base.White' }}>
              Yes
            </Typography>
          </CustomButton>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}

export default DeleteProductModal
