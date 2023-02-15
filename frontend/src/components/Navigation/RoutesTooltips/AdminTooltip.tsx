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
import { MANAGE_PRODUCTS_PATH, USERS_PATH } from '../../../constants/paths'
import { toggleLogoutModalAction } from '../../../redux/logout_modal/actions'
import { userSelector } from '../../../redux/user/selectors'

const AdminToolTip = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()

  const logOut = () => {
    dispatch(toggleLogoutModalAction())
  }

  interface Option {
    title: string
    path: string
  }

  const options: Option[] = [
    { title: 'Products', path: MANAGE_PRODUCTS_PATH },
    { title: 'Users', path: USERS_PATH },
  ]

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
          {options.map((option, index) => (
            <ListItem key={index} sx={{ px: 0, py: 0 }}>
              <ListItemButton sx={{ px: 0 }}>
                <ListItemText
                  sx={{
                    fontSize: 15,
                    color: '#404040',
                    fontFamily: 'Source Sans Pro',
                    fontWeight: '1000',

                    pl: 3,
                  }}
                  primary={option.title}
                />
              </ListItemButton>
            </ListItem>
          ))}
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
