import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUserAction } from '../redux/user/actions'
import { clearCartAction } from '../redux/cart/actions'
import { useNavigate } from 'react-router-dom'
import { ROOT_PATH } from '../constants/paths'
import { modalsSelector } from '../redux/modals/selectors'
import { toggleLogoutModalAction } from '../redux/modals/actions'
import { IconButton, Stack, Typography } from '@mui/material'
import { CgClose } from 'react-icons/cg'
import CustomButton from './common/CustomButton'

const LogoutModal = () => {
  const { logoutModal } = useSelector(modalsSelector)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const closeModal = () => {
    dispatch(toggleLogoutModalAction(false))
  }

  const logOut = () => {
    dispatch(logoutUserAction())
    dispatch(clearCartAction())
    dispatch(toggleLogoutModalAction())
    navigate(ROOT_PATH)
  }

  return (
    <Dialog
      open={logoutModal}
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
          <Typography variant="TEXT_LG_SEMIBOLD">Log out</Typography>
          <IconButton disableRipple onClick={closeModal}>
            <CgClose />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to log out ?
        </DialogContentText>
      </DialogContent>
      <DialogActions sx={{ padding: '32px 32px 24px 32px' }}>
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ width: '100%' }}
          gap="12px"
        >
          <CustomButton
            onClick={logOut}
            variant="outlined"
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Gray.700' }}>
              Yes
            </Typography>
          </CustomButton>

          <CustomButton
            onClick={closeModal}
            variant="contained"
            sx={{
              width: '50%',
              height: '44px',
              borderRadius: '4px',
              bgcolor: 'Gray.900',
            }}
          >
            <Typography variant="TEXT_MD_SEMIBOLD" sx={{ color: 'Base.White' }}>
              No
            </Typography>
          </CustomButton>
        </Stack>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutModal
