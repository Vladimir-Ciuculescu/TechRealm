import { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import { Badge, CssBaseline, Drawer, Link } from '@mui/material'
import CustomTooltip from '../common/CustomTooltip'
import useMediaQuery from '@mui/material/useMediaQuery'
import DrawerComponent from './Drawer'
import NavigationLinks from './NavItems'

const drawerWidth = 240

interface Props {
  window?: () => Window
}

const NavBar = (props: Props) => {
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  const handleToggleDrawer = () => {
    setToggleDrawer(!toggleDrawer)
  }

  const isBigScreen = useMediaQuery('(min-width:750px)')

  const { window } = props

  const container =
    window !== undefined ? () => window().document.body : undefined

  const navLinks = NavigationLinks()

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar sx={{ height: '100%' }}>
            <Container>
              <Typography
                variant="h6"
                noWrap
                component="a"
                className="test"
                href="/"
                sx={{
                  display: isBigScreen ? 'flex' : 'none',

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
                  display: isBigScreen ? 'none' : 'flex',
                  alignItems: 'center',
                  color: 'white',
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
                display: isBigScreen ? 'flex' : 'none',

                height: '100%',
                gap: 5,
              }}
            >
              {navLinks.map((page, key) => (
                <CustomTooltip
                  containerSpace={-12}
                  title={page.tooltipContent}
                  paddingSpace={page.tooltipPaddingSpace}
                  tooltipWidth={page.tooltipWidth}
                >
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
                    {page.badge ? (
                      <Badge badgeContent={page.badge.value} color="error">
                        {page.icon}
                      </Badge>
                    ) : (
                      page.icon
                    )}
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
                </CustomTooltip>
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
          display: isBigScreen ? 'none' : 'flex',

          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        <DrawerComponent setToggleDrawer={handleToggleDrawer} />
      </Drawer>
    </Box>
  )
}

export default NavBar
