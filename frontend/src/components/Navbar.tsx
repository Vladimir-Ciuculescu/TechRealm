import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import { useNavigate } from 'react-router-dom'
import { HiChevronDoubleRight } from 'react-icons/hi'

import Container from '@mui/material/Container'

import {
  Button,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemAvatar,
} from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

import CustomToolTip from './common/CustomTooltip'

const ICON_DIMENSION = 30

const drawerWidth = 240

const accountTooltipContent = () => {
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
          flexDirection: 'row',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
        }}
      >
        <Typography sx={{ color: 'black' }}>
          Here you can manage your account
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          background: '#F0F8FF',
          paddingLeft: 2,
          paddingRight: 2,
          paddingTop: 1,
          paddingBottom: 1,
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

const favouritesToolTip = () => {
  return (
    <Typography
      sx={{
        width: '350px',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        color: 'black',
      }}
    >
      Add the products you like to favorites
    </Typography>
  )
}

const cartTooltip = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        gap: 2,
      }}
    >
      <Typography sx={{ color: 'black' }}>
        You don't have any items in your cart
      </Typography>
      <Button
        href="/cart"
        variant="contained"
        sx={{ textTransform: 'none', fontSize: 16 }}
        startIcon={<HiChevronDoubleRight />}
        size="small"
      >
        See cart details
      </Button>
    </Box>
  )
}

const pages = [
  {
    title: 'Account',
    path: '/login',
    icon: <BsPerson fontSize={ICON_DIMENSION} />,
    tooltipContent: accountTooltipContent(),
  },
  {
    title: 'Favorites',
    path: '/favorites',
    icon: <FiHeart fontSize={ICON_DIMENSION} />,
    tooltipContent: favouritesToolTip(),
  },
  {
    title: 'Cart',
    path: '/cart',
    icon: <AiOutlineShoppingCart fontSize={ICON_DIMENSION} />,
    tooltipContent: cartTooltip(),
  },
]

interface Props {
  window?: () => Window
}

const NavBar = (props: Props) => {
  const navigate = useNavigate()
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  const { window } = props

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box
      onClick={() => setToggleDrawer(!toggleDrawer)}
      sx={{ textAlign: 'center' }}
    >
      <List dense={false}>
        {pages.map((item, key) => (
          <ListItem
            sx={{ marginBottom: 1 }}
            dense={false}
            key={key}
            disablePadding
            secondaryAction={<MdOutlineKeyboardArrowRight size={25} />}
          >
            <ListItemAvatar>{item.icon}</ListItemAvatar>

            <Link
              href={item.path}
              sx={{ textDecoration: 'none' }}
              onClick={() => navigate(item.path)}
            >
              {item.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Container>
              <Typography
                variant="h6"
                noWrap
                component="a"
                className="test"
                href="/"
                sx={{
                  display: { xs: 'none', sm: 'block', md: 'block' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                  '&:hover': {
                    color: 'inherit',
                  },
                }}
              >
                TechRealm
              </Typography>
              <Box
                sx={{
                  display: {
                    xs: 'flex',
                    md: 'none',
                    sm: 'none',
                    color: 'white',
                  },

                  alignItems: 'center',
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={() => setToggleDrawer(!toggleDrawer)}
                  color="inherit"
                  disableRipple
                >
                  <MenuIcon />
                </IconButton>

                <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  className="test"
                  href="/"
                  sx={{
                    position: 'absolute',
                    left: '40%',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    '&:hover': {
                      color: 'inherit',
                    },
                  }}
                >
                  TechRealm
                </Typography>
              </Box>
            </Container>

            <Box
              sx={{
                mr: 10,
                display: { xs: 'none', sm: 'flex', md: 'flex' },
                gap: 5,
              }}
            >
              {pages.map((page, key) => (
                <CustomToolTip title={page.tooltipContent}>
                  <Link
                    key={key}
                    color="inherit"
                    href={page.path}
                    underline="none"
                    justifyContent="center"
                    noWrap
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      '&:hover': {
                        color: 'inherit',
                      },
                    }}
                  >
                    {page.icon}
                    <Typography
                      component="a"
                      sx={{
                        ml: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                        '&:hover': {
                          color: 'inherit',
                        },
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </CustomToolTip>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        onClose={() => setToggleDrawer(!toggleDrawer)}
        container={container}
        variant="temporary"
        open={toggleDrawer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default NavBar
