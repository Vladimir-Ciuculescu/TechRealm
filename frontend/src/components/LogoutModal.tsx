import React from 'react'
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

const LogoutModal = () => {
  const { logoutModal } = useSelector(modalsSelector)

  console.log(logoutModal)
  //const { visible } = useSelector(logoutModalSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const handleModal = () => {

  //   dispatch(toggleLogoutModalAction())
  // }
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
      //open={visible}
      open={logoutModal}
      //onClose={handleModal}
      onClose={closeModal}
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
        <Button
          disableRipple
          //onClick={handleModal}
          onClick={closeModal}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutModal
