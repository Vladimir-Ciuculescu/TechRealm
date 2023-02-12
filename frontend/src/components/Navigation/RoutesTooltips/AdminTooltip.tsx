import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleLogoutModalAction } from '../../../redux/logout_modal/actions'
import { userSelector } from '../../../redux/user/selectors'

const AdminToolTip = () => {
  const user = useSelector(userSelector)
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(toggleLogoutModalAction())
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          py: 1,
          pl: 2,
          pr: 3,
        }}
      >
        <Typography
          sx={{
            color: '#50148c',
            fontSize: 20,
            fontFamily: 'Source Sans Pro',
            fontWeight: '1000',
            pl: 1,
          }}
        >
          Welcome back, {user.firstName}
        </Typography>
      </Box>

      <Box>
        <List>
          <ListItem sx={{ px: 0, py: 0 }}>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemText
                sx={{
                  fontSize: 15,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: '1000',

                  pl: 3,
                }}
                primary="My account"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ px: 0, py: 0 }}>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemText
                sx={{
                  fontSize: 15,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: '1000',

                  pl: 3,
                }}
                primary="Orders"
              />
            </ListItemButton>
          </ListItem>
          <ListItem sx={{ px: 0, py: 0 }}>
            <ListItemButton sx={{ px: 0 }}>
              <ListItemText
                sx={{
                  fontSize: 15,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: '1000',

                  pl: 3,
                }}
                primary="Favorites"
              />
            </ListItemButton>
          </ListItem>
          <Divider sx={{ background: '#b7b7c2', width: '100%' }} />
          <ListItem sx={{ px: 0 }}>
            <ListItemButton sx={{ px: 0 }} onClick={logOut}>
              <ListItemText
                sx={{
                  fontSize: 15,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: '1000',

                  pl: 3,
                }}
                primary="Log out"
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default AdminToolTip
