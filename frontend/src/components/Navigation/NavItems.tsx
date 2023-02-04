import { Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CART_PATH, FAVORITES_PATH, LOGIN_PATH } from '../../constants/paths'
import { Product } from '../../interfaces/Product'
import { setCartAction } from '../../redux/cart/actions'
import {
  cartProductsSelector,
  cartTotalProductsSelector,
} from '../../redux/cart/selectors'
import {
  isUserLoggedSelector,
  userInitialsSelector,
  userSelector,
} from '../../redux/user/selectors'
import { getUserProductsApi } from '../../services/productApi'
import AccountTooltip from './RoutesTooltips/AccountTooltip'
import CartTooltip from './RoutesTooltips/CartTolltip'
import FavoritesTooltip from './RoutesTooltips/FavoritesTooltip'

const NavigationItems = () => {
  const user = useSelector(userSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const totalProducts = useSelector(cartTotalProductsSelector)
  const userInitials = useSelector(userInitialsSelector)
  const cartProducts = useSelector(cartProductsSelector)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const getProducts = async () => {
      if (isLogged) {
        const response = await getUserProductsApi(user.id)
        dispatch(setCartAction(response?.products))
      }
    }
    getProducts()
  }, [navigate])

  const navItems = [
    {
      title: 'Account',
      path: LOGIN_PATH,
      icon: user.email ? (
        <Avatar
          sx={{ width: 40, height: 40, fontSize: 16, bgcolor: user.color }}
        >
          {userInitials}
        </Avatar>
      ) : (
        <BsPerson fontSize={30} />
      ),
      tooltipContent: <AccountTooltip />,
      tooltipPaddingSpace: 0,
      badge: null,
      tooltipWidth: user.email ? 250 : null,
    },
    {
      title: 'Favorites',
      path: FAVORITES_PATH,
      icon: <FiHeart fontSize={30} />,
      tooltipContent: <FavoritesTooltip />,
      tooltipPaddingSpace: 'none',
      badge: null,
    },
    {
      title: 'Cart',
      path: CART_PATH,
      icon: <AiOutlineShoppingCart fontSize={30} />,
      tooltipContent: (
        <CartTooltip total={totalProducts} products={cartProducts} />
      ),
      tooltipPaddingSpace: 0,
      badge: {
        value: totalProducts,
      },
    },
  ]

  return navItems
}

export default NavigationItems
