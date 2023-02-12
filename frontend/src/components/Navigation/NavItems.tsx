import { Avatar, Typography } from '@mui/material'
import { useEffect } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  CART_PATH,
  FAVORITES_PATH,
  LOGIN_PATH,
  PROFILE_PATH,
} from '../../constants/paths'
import { NavigationItem } from '../../interfaces/NavigationItem'
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
import { MdAdminPanelSettings } from 'react-icons/md'
import { Roles } from '../../enums/Roles'

const NavItems = () => {
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

  const navItems: NavigationItem[] = [
    {
      title: 'Admin',
      path: PROFILE_PATH,
      icon: <MdAdminPanelSettings fontSize={30} />,
      tooltipContent: <Typography>awdaw</Typography>,
      tooltipPaddingSpace: 0,
      badgeValue: 0,
      rolesAllowed: [Roles.ADMIN],
    },
    {
      title: 'Account',
      path: isLogged ? PROFILE_PATH : LOGIN_PATH,
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
      tooltipWidth: user.email ? 250 : null,
      badgeValue: null,
      rolesAllowed: [Roles.CLIENT, Roles.UNLOGGED],
    },
    {
      title: 'Favorites',
      path: FAVORITES_PATH,
      icon: <FiHeart fontSize={30} />,
      tooltipContent: <FavoritesTooltip />,
      tooltipPaddingSpace: 'none',
      badgeValue: null,
      rolesAllowed: [Roles.CLIENT, Roles.UNLOGGED],
    },
    {
      title: 'Cart',
      path: CART_PATH,
      icon: <AiOutlineShoppingCart fontSize={30} />,
      tooltipContent: (
        <CartTooltip total={totalProducts} products={cartProducts} />
      ),
      tooltipPaddingSpace: 0,
      badgeValue: totalProducts,
      rolesAllowed: [Roles.CLIENT, Roles.UNLOGGED],
    },
  ]

  return navItems
}

export default NavItems
