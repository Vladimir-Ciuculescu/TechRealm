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
import { User } from '../../interfaces/User'
import { setUsersAction } from '../../redux/manage_users/actions'
import {
  currentUserSelector,
  usersSelector,
} from '../../redux/manage_users/selectors'
import { toggleDeleteUserModalAction } from '../../redux/modals/actions'
import { modalsSelector } from '../../redux/modals/selectors'
import { deleteUserApi } from '../../services/userApi'
import CustomButton from '../common/CustomButton'

const DeleteUserModal: React.FC<any> = () => {
  const [loading, setLoading] = useState(false)
  const { deleteUserModal } = useSelector(modalsSelector)
  const dispatch = useDispatch()
  const currentUser = useSelector(currentUserSelector)
  const users = useSelector(usersSelector)

  const closeModal = () => {
    dispatch(toggleDeleteUserModalAction(false))
  }

  const deleteUser = async () => {
    setLoading(true)

    try {
      await deleteUserApi(currentUser)
      dispatch(
        setUsersAction(
          users.filter((item: User) => item.id !== currentUser.id),
        ),
      )
      closeModal()
    } catch (error) {}

    setLoading(false)
  }

  return (
    <Dialog
      open={deleteUserModal}
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
          <Typography variant="TEXT_LG_SEMIBOLD">Delete user</Typography>
          <IconButton disableRipple onClick={closeModal}>
            <CgClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <Typography>Are you sure you want to delete this user ?</Typography>
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
            onClick={deleteUser}
            variant="contained"
            loading={loading}
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

export default DeleteUserModal
