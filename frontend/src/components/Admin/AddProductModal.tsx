import {
  Dialog,
  DialogTitle,
  Grid,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import React from 'react'
import { CgClose } from 'react-icons/cg'

interface AddProductModalProps {
  open: boolean
  closeModal: () => void
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  open,
  closeModal,
}) => {
  return (
    <Dialog
      open={open}
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
          <Typography>Add product</Typography>
          <IconButton disableRipple onClick={closeModal}>
            <CgClose />
          </IconButton>
        </Stack>
      </DialogTitle>
    </Dialog>
  )
}

export default AddProductModal
