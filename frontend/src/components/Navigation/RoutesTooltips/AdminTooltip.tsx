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
import {
  MANAGE_PRODUCTS_PATH,
  MANAGE_USERS_PATH,
  USERS_PATH,
} from '../../../constants/paths'
import { userSelector } from '../../../redux/user/selectors'
import { MdLogout, MdOutlineInventory } from 'react-icons/md'
import { HiUsers } from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { toggleLogoutModalAction } from '../../../redux/modals/actions'

const AdminToolTip = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // const logOut = () => {
  //   //dispatch(toggleLogoutModalAction)
  //   dispatch(toggleLogoutModalAction(false))
  // }

  const openLogoutModal = () => {
    dispatch(toggleLogoutModalAction(true))
  }

  interface Option {
    title: string
    path: string
    icon: JSX.Element
  }

  const options: Option[] = [
    {
      title: 'Products',
      path: MANAGE_PRODUCTS_PATH,
      icon: <MdOutlineInventory style={{ fontSize: '20px' }} />,
    },
    {
      title: 'Users',
      path: MANAGE_USERS_PATH,
      icon: <HiUsers style={{ fontSize: '20px' }} />,
    },
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
            <ListItem
              key={index}
              sx={{ px: 0, py: 0 }}
              secondaryAction={option.icon}
            >
              <ListItemButton
                sx={{ px: 0 }}
                onClick={() => navigate(option.path)}
                disableRipple
              >
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
          <ListItem
            sx={{ px: 0 }}
            secondaryAction={<MdLogout style={{ fontSize: '20px' }} />}
          >
            <ListItemButton sx={{ px: 0 }} onClick={openLogoutModal}>
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
