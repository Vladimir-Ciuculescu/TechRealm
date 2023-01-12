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
  cartProductsSelector,
  cartTotalCostSelector,
  cartTotalProductsSelector,
} from '../redux/cart/selectors'

import {
  Badge,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'

import CommonTooltip from './common/CommonTooltip'
import { useDispatch, useSelector } from 'react-redux'
import { CartProduct } from '../interfaces/CartProduct'
import { IoCloseOutline } from 'react-icons/io5'
import { removeProductAction } from '../redux/cart/actions'
import { CART_PATH, FAVORITES_PATH, LOGIN_PATH } from '../constants/paths'

const ICON_DIMENSION = 30

const drawerWidth = 240

const AccountTooltipContent = () => {
  return (
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

const FavouritesToolTip = () => {
  return (
    <Box sx={{ px: 2, py: 1 }}>
      <Typography>Add your favourite products here !</Typography>
    </Box>
  )
}

const CartTooltip = () => {
  const totalProducts = useSelector(cartTotalProductsSelector)
  const cartProducts = useSelector(cartProductsSelector)
  const totalCost = useSelector(cartTotalCostSelector)

  return totalProducts !== 0 ? (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}
      >
        <Typography sx={{ textTransform: 'uppercase', color: '#50148c' }}>
          Your products
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',

          width: '100%',

          borderBottomLeftRadius: 3,
          borderBottomRightRadius: 3,
        }}
      >
        <List
          component="nav"
          aria-label="mailbox folders"
          sx={{ mt: -1, mb: -2 }}
        >
          <Divider sx={{ background: '#b7b7c2', width: '100%' }} />
          {cartProducts.map((cartItem: CartProduct) => (
            <CartTooltipProduct cartItem={cartItem} />
          ))}
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: '100%',
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              TOTAL: {totalProducts} products
            </Typography>
            <Typography>{totalCost.toFixed(2)}$</Typography>
          </ListItem>
          <Divider sx={{ background: '#b7b7c2' }} />
          <ListItem
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Button
              href="/cart"
              variant="contained"
              sx={{
                textTransform: 'none',
                fontSize: 16,
                mb: 1,
                my: 1,
                width: '100%',
                ':hover': {
                  color: 'white',
                },
              }}
              startIcon={<HiChevronDoubleRight />}
              size="small"
            >
              See cart details
            </Button>
          </ListItem>
        </List>
      </Box>
    </Box>
  ) : (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: 2,
        paddingRight: 2,
        paddingTop: 1,
        paddingBottom: 1,
        gap: 2,
        borderRadius: 2,
      }}
    >
      <Typography sx={{ color: 'black' }}>
        You don't have any items in your cart
      </Typography>
      <Button
        href="/cart"
        variant="contained"
        sx={{ textTransform: 'none', fontSize: 16, mb: 1 }}
        startIcon={<HiChevronDoubleRight />}
        size="small"
      >
        See cart details
      </Button>
    </Box>
  )
}

interface CartTooltipProductProps {
  cartItem: CartProduct
}

const CartTooltipProduct: React.FC<CartTooltipProductProps> = ({
  cartItem,
}) => {
  const { id } = cartItem

  const [removeIcon, toggleRemoveIcon] = useState(false)
  const dispatch = useDispatch()

  const goToProductPage = (productId: number) => {
    window.location.href = `/products/${productId}`
  }

  return (
    <ListItem
      onMouseOver={() => toggleRemoveIcon(true)}
      onMouseOut={() => toggleRemoveIcon(false)}
      button
      divider
      disableRipple
      sx={{ gap: 2, cursor: 'inherit' }}
    >
      <img
        width="20%"
        src={cartItem.defaultImage}
        alt={cartItem.name}
        style={{ cursor: 'pointer' }}
        onClick={() => goToProductPage(id)}
      />
      <ListItemText
        sx={{ width: '47%', cursor: 'pointer' }}
        primary={cartItem.name}
        onClick={() => goToProductPage(id)}
      />
      <ListItemText
        sx={{ mt: -4 }}
        primaryTypographyProps={{
          letterSpacing: '.2rem',
        }}
        primary={`x${cartItem.quantity}`}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          background: 'red',
          pl: 4,
        }}
      >
        <ListItemText
          sx={{
            position: 'absolute',
            top: 10,
            right: 10,
            color: '#50148c',
          }}
          primaryTypographyProps={{
            fontWeight: 'bold',
            fontSize: 16,
          }}
          primary={`${(cartItem.price * cartItem.quantity).toFixed(2)}$`}
        />
        {removeIcon ? (
          <IoCloseOutline
            style={{
              position: 'absolute',
              bottom: 15,
              right: 20,
              width: '25px',
              height: '25px',
              cursor: 'pointer',
              background: 'white',
            }}
            onClick={() => dispatch(removeProductAction(cartItem))}
          />
        ) : null}
      </Box>
    </ListItem>
  )
}

interface Props {
  window?: () => Window
}

const NavBar = (props: Props) => {
  const navigate = useNavigate()
  const [toggleDrawer, setToggleDrawer] = useState<boolean>(false)
  const totalProducts = useSelector(cartTotalProductsSelector)

  const { window } = props

  const container =
    window !== undefined ? () => window().document.body : undefined

  const pages = [
    {
      title: 'Account',
      path: LOGIN_PATH,
      icon: <BsPerson fontSize={ICON_DIMENSION} />,
      tooltipContent: AccountTooltipContent(),
      tooltipPaddingSpace: 0,
      badge: null,
    },
    {
      title: 'Favorites',
      path: FAVORITES_PATH,
      icon: <FiHeart fontSize={ICON_DIMENSION} />,
      tooltipContent: FavouritesToolTip(),
      tooltipPaddingSpace: 'none',
      badge: null,
    },
    {
      title: 'Cart',
      path: CART_PATH,
      icon: <AiOutlineShoppingCart fontSize={ICON_DIMENSION} />,
      tooltipContent: CartTooltip(),
      tooltipPaddingSpace: 0,
      badge: {
        value: totalProducts,
      },
    },
  ]

  const drawer = (
    <Box
      onClick={() => setToggleDrawer(!toggleDrawer)}
      sx={{ textAlign: 'center' }}
    >
      <List dense={false}>
        {pages.map((page, key) => (
          <ListItem
            sx={{ marginBottom: 1 }}
            dense={false}
            key={key}
            disablePadding
            secondaryAction={<MdOutlineKeyboardArrowRight size={25} />}
          >
            <ListItemAvatar>
              {page.badge ? (
                <Badge badgeContent={page.badge.value} color="error">
                  {page.icon}
                </Badge>
              ) : (
                page.icon
              )}
            </ListItemAvatar>

            <Link
              href={page.path}
              sx={{ textDecoration: 'none' }}
              onClick={() => navigate(page.path)}
            >
              {page.title}
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

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

                height: '100%',
                gap: 5,
              }}
            >
              {pages.map((page, key) => (
                <CommonTooltip
                  containerSpace={-12}
                  title={page.tooltipContent}
                  paddingSpace={page.tooltipPaddingSpace}
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
                </CommonTooltip>
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
