import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'

import Container from '@mui/material/Container'

import {
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { BiLogIn } from 'react-icons/bi'
import { AiOutlineShoppingCart } from 'react-icons/ai'

const ICON_DIMENSION = 30

const pages = [
  { title: 'Cart', path: '/cart', icon: <BiLogIn fontSize={ICON_DIMENSION} /> },
  {
    title: 'Sign In',
    path: '/signin',
    icon: <AiOutlineShoppingCart fontSize={ICON_DIMENSION} />,
  },
]
const drawerWidth = 240

interface Props {
  window?: () => Window
}

const NavBar = (props: Props) => {
  const { window } = props

  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)

  const container =
    window !== undefined ? () => window().document.body : undefined

  const drawer = (
    <Box
      onClick={() => setToggleDrawer(!toggleDrawer)}
      sx={{ textAlign: 'center' }}
    >
      <List>
        {pages.map((item, key) => (
          <ListItem key={key} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
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
            }}
          >
            <Grid container spacing={4}>
              {pages.map((page, key) => (
                <Grid item xs={6}>
                  <Link
                    key={key}
                    color="inherit"
                    href="#"
                    underline="none"
                    justifyContent={'center'}
                    noWrap
                  >
                    {page.icon}
                    <Typography
                      component="a"
                      href={page.path}
                      sx={{
                        ml: 1,
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Toolbar>
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
