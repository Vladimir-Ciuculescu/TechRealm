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
import { ROOT_PATH } from '../../../constants/paths'
import { logoutUserAction } from '../../../redux/user/actions'
import {
  userInitialsSelector,
  userSelector,
} from '../../../redux/user/selectors'

const AccountTooltip: React.FC<any> = () => {
  const user = useSelector(userSelector)
  const userInitials = useSelector(userInitialsSelector)
  const dispatch = useDispatch()

  const logOut = () => {
    window.location.href = ROOT_PATH
    dispatch(logoutUserAction())
  }

  return user.email ? (
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
            <ListItemButton sx={{ px: 0 }}>
              <ListItemText
                onClick={logOut}
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

export default AccountTooltip
