import { Avatar } from '@mui/material'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import { CART_PATH, FAVORITES_PATH, LOGIN_PATH } from '../../constants/paths'
import { cartTotalProductsSelector } from '../../redux/cart/selectors'
import { userInitialsSelector, userSelector } from '../../redux/user/selectors'
import AccountTooltip from './RoutesTooltips/AccountTooltip'
import CartTooltip from './RoutesTooltips/CartTolltip'
import FavoritesTooltip from './RoutesTooltips/FavoritesTooltip'

const NavigationItems = () => {
  const user = useSelector(userSelector)
  const totalProducts = useSelector(cartTotalProductsSelector)
  const userInitials = useSelector(userInitialsSelector)

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
      tooltipContent: <CartTooltip />,
      tooltipPaddingSpace: 0,
      badge: {
        value: totalProducts,
      },
    },
  ]

  return navItems
}

export default NavigationItems
