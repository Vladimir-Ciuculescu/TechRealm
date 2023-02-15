import {
  Box,
  Button,
  Divider,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import React from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  FAVORITES_PATH,
  ORDERS_PATH,
  PROFILE_PATH,
} from '../../../constants/paths'
import { toggleLogoutModalAction } from '../../../redux/logout_modal/actions'
import { userSelector } from '../../../redux/user/selectors'

const ClientTooltip: React.FC<any> = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openLogoutModal = () => {
    dispatch(toggleLogoutModalAction())
  }

  interface Option {
    title: string
    path: string
  }

  const options: Option[] = [
    {
      title: 'My account',
      path: PROFILE_PATH,
    },
    {
      title: 'Orders',
      path: ORDERS_PATH,
    },
    {
      title: 'Favorites',
      path: FAVORITES_PATH,
    },
  ]

  return user.isLogged ? (
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
              <ListItemButton
                sx={{ px: 0 }}
                onClick={() => navigate(option.path)}
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
          <ListItem sx={{ px: 0 }}>
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
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box sx={{ px: 2, py: 1 }}>
        <Typography>Here you can manage your account </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          background: '#F0F8FF',
          width: '100%',
          px: 2,
          py: 1,

          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
        }}
      >
        <Button
          href="/login"
          variant="contained"
          sx={{ textTransform: 'none', fontSize: 16 }}
          startIcon={<HiChevronDoubleRight />}
          size="small"
        >
          Login
        </Button>
        <Link
          href="/register"
          sx={{ textDecoration: 'none', cursor: 'pointer', fontSize: 16 }}
        >
          Create account
        </Link>
      </Box>
    </Box>
  )
}

export default ClientTooltip
