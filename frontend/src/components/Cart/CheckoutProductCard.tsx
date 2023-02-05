import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { SelectOption } from '../../interfaces/SelectOption'
import CustomSelect from '../common/CustomSelect'
import { FiHeart } from 'react-icons/fi'
import { useTheme } from '@mui/material/styles'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useDispatch, useSelector } from 'react-redux'
import {
  removeProductAction,
  setQuantityProductAction,
} from '../../redux/cart/actions'
import { CartProduct } from '../../interfaces/CartProduct'
import { useNavigate } from 'react-router-dom'
import { PRODUCTS_PATH } from '../../constants/paths'
import { isUserLoggedSelector, userSelector } from '../../redux/user/selectors'
import {
  deleteUserProductApi,
  updateUserProductQuantityApi,
} from '../../services/productApi'

const options: SelectOption[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
]

interface CheckoutProductCardProps {
  cartItem: CartProduct
}

const CheckoutProductCard: React.FC<CheckoutProductCardProps> = ({
  cartItem,
}) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isBiggerThan1500px = useMediaQuery('(min-width:1500px)')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLogged = useSelector(isUserLoggedSelector)
  const user = useSelector(userSelector)

  const { name, defaultImage, price, quantity, id } = cartItem

  const totalCost = quantity! * price

  const deleteProduct = async (cartItem: CartProduct) => {
    dispatch(removeProductAction(cartItem))

    if (isLogged) {
      await deleteUserProductApi(user.id, cartItem)
    }
  }

  const updateProductQuantity = async (units: number) => {
    dispatch(setQuantityProductAction(cartItem, units))

    if (isLogged) {
      await updateUserProductQuantityApi(user.id, cartItem.id, units)
    }
  }

  return (
    <Paper
      elevation={1}
      sx={{
        width: '100%',
        background: 'white',
        borderRadius: 2,
        padding: 2,
      }}
    >
      <Grid container direction="row" columnGap={{ md: 1 }} rowGap={{ xs: 1 }}>
        <Grid item md={isBiggerThan1500px ? 2 : 4} sm={6} xs={6}>
          <img
            src={defaultImage}
            style={{ cursor: 'pointer' }}
            width="100%"
            alt=""
            onClick={() => navigate(`${PRODUCTS_PATH}/${id}`)}
          />
        </Grid>
        <Grid item md={isBiggerThan1500px ? 3 : 5} sm={6} xs={6}>
          <Typography
            whiteSpace={'break-spaces'}
            fontWeight="bold"
            variant="h4"
            sx={{ fontFamily: 'Source Sans Pro', cursor: 'pointer' }}
            onClick={() => navigate(`${PRODUCTS_PATH}/${id}`)}
          >
            {name}
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={isBiggerThan1500px ? 1.5 : 3}
          xs={3}
          sm={3}
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
          }}
          direction="row"
          columnGap={2}
        >
          <Typography
            sx={{
              fontSize: 18,
              color: '#404040',
              fontFamily: 'Source Sans Pro',
              fontWeight: '1000',
            }}
          >
            {price}$
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={isBiggerThan1500px ? 1 : 2}
          xs={3}
          sm={3}
          sx={{
            alignItems: 'center',

            justifyContent: 'center',
          }}
          direction="row"
          columnGap={2}
        >
          <CustomSelect
            options={options}
            placeholder=""
            displayDropdownIndicator={false}
            displayindicatorSeparator={false}
            alignSingleValueText={true}
            width="60%"
            value={quantity}
            onChange={(e: any) => updateProductQuantity(e.value)}
          />
        </Grid>
        <Grid
          container
          item
          md={isBiggerThan1500px ? 1.5 : 3}
          xs={3}
          sm={3}
          sx={{
            alignItems: 'center',

            justifyContent: 'center',
          }}
          direction="row"
        >
          <Typography
            sx={{
              fontSize: 18,
              color: '#404040',
              fontFamily: 'Source Sans Pro',
              fontWeight: 700,
            }}
          >
            {totalCost.toFixed(2)}$
          </Typography>
        </Grid>

        <Grid
          container
          item
          md={isBiggerThan1500px ? 1.5 : 3}
          sm={3}
          xs={3}
          direction="column"
          rowGap={3}
          pr={2}
          ml={isBiggerThan1500px ? 6 : 0}
          sx={{ justifyContent: 'space-evenly', alignItems: 'flex-end' }}
        >
          <Grid item>
            <FiHeart
              style={{ cursor: 'pointer' }}
              color="red"
              fontSize={isSmallScreen ? 25 : 35}
            />
          </Grid>
          <Grid item>
            <IoCloseOutline
              style={{ cursor: 'pointer' }}
              fontSize={isSmallScreen ? 25 : 35}
              color="#4a148c"
              onClick={() => deleteProduct(cartItem)}
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CheckoutProductCard
