import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { CgClose } from 'react-icons/cg'
import CustomInput from '../common/CustomInput'
import { BsCurrencyDollar } from 'react-icons/bs'

interface AddProductModalProps {
  open: boolean
  closeModal: () => void
}

const AddProductModal: React.FC<AddProductModalProps> = ({
  open,
  closeModal,
}) => {
  const [name, setName] = useState<string>('')
  const [price, setPrice] = useState<number>()

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
      <DialogContent>
        <Stack gap="24px">
          <CustomInput
            value={name}
            handleValue={setName}
            width="100%"
            type="text"
            label="Name"
          />
          <CustomInput
            value={price}
            handleValue={(e: any) => setPrice(e)}
            width="100%"
            type="number"
            label="Price"
            startAdornment={
              <InputAdornment position="start">
                <BsCurrencyDollar />
              </InputAdornment>
            }
          />
        </Stack>
      </DialogContent>
    </Dialog>
  )
}

export default AddProductModal
