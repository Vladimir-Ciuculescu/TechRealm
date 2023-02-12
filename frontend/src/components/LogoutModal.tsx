import React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useDispatch, useSelector } from 'react-redux'
import { logoutModalSelector } from '../redux/logout_modal/selectors'
import { toggleLogoutModalAction } from '../redux/logout_modal/actions'
import { logoutUserAction } from '../redux/user/actions'
import { clearCartAction } from '../redux/cart/actions'
import { useNavigate } from 'react-router-dom'
import { ROOT_PATH } from '../constants/paths'

const LogoutModal = () => {
  const { visible } = useSelector(logoutModalSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleModal = () => {
    dispatch(toggleLogoutModalAction())
  }

  const logOut = () => {
    dispatch(logoutUserAction())
    dispatch(clearCartAction())
    dispatch(toggleLogoutModalAction())
    navigate(ROOT_PATH)
  }

  return (
    <Dialog
      open={visible}
      onClose={handleModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Log out</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to log out ?
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button disableRipple onClick={logOut}>
          Yes
        </Button>
        <Button disableRipple onClick={handleModal}>
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutModal
