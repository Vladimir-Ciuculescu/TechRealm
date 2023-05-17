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
import { MdLogout } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  FAVORITES_PATH,
  ORDERS_PATH,
  PROFILE_PATH,
} from '../../../constants/paths'
import { userSelector } from '../../../redux/user/selectors'
import { BiPurchaseTag } from 'react-icons/bi'
import { MdManageAccounts } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { toggleLogoutModalAction } from '../../../redux/modals/actions'

const ClientTooltip: React.FC<any> = () => {
  const user = useSelector(userSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const openLogoutModal = () => {
    //dispatch(toggleLogoutModalAction())
    dispatch(toggleLogoutModalAction(true))
  }

  interface Option {
    title: string
    path: string
    icon: JSX.Element
  }

  const options: Option[] = [
    // {
    //   title: 'My account',
    //   path: PROFILE_PATH,
    //   icon: <MdManageAccounts style={{ fontSize: '20px' }} />,
    // },
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
            <ListItem
              key={index}
              sx={{ px: 0, py: 0 }}
              secondaryAction={option.icon}
            >
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
          sx={{
            textTransform: 'none',
            fontSize: 16,
            bgcolor: 'Violet.600',
            ':hover': {
              bgcolor: 'Violet.900',
              color: 'white',
            },
          }}
          startIcon={<HiChevronDoubleRight />}
          size="small"
        >
          Login
        </Button>
        <Link
          href="/register"
          sx={{
            textDecoration: 'none',
            cursor: 'pointer',
            fontSize: 16,
            color: 'Violet.600',
          }}
        >
          Create account
        </Link>
      </Box>
    </Box>
  )
}

export default ClientTooltip
