import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { CartProduct } from '../../../interfaces/CartProduct'
import { Product } from '../../../interfaces/Product'
import { removeProductAction } from '../../../redux/cart/actions'
import { cartTotalCostSelector } from '../../../redux/cart/selectors'
import {
  isUserLoggedSelector,
  userSelector,
} from '../../../redux/user/selectors'
import { deleteUserProductApi } from '../../../services/productApi'

interface CartTooltipProductProps {
  cartItem: CartProduct
}

const CartTooltipProduct: React.FC<CartTooltipProductProps> = ({
  cartItem,
}) => {
  const { id } = cartItem

  const [removeIcon, toggleRemoveIcon] = useState(false)
  const isLogged = useSelector(isUserLoggedSelector)
  const dispatch = useDispatch()
  const user = useSelector(userSelector)

  const goToProductPage = (productId: number) => {
    window.location.href = `/products/${productId}`
  }

  const deleteProduct = async (cartItem: CartProduct) => {
    dispatch(removeProductAction(cartItem))

    if (isLogged) {
      await deleteUserProductApi(user.id, cartItem)
    }
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
          primary={
            <Stack justifyContent="flex-end" alignItems="flex-end">
              <Typography>
                {`${(cartItem.price * cartItem.quantity).toFixed(2)} $`}
              </Typography>
              <Typography>{`x${cartItem.quantity}`}</Typography>
            </Stack>
            // `${(cartItem.price * cartItem.quantity).toFixed(2)}$`
          }
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
            onClick={() => deleteProduct(cartItem)}
          />
        ) : null}
      </Box>
    </ListItem>
  )
}

interface CartTooltipProps {
  products: Product[] | undefined
  total: number | undefined
}

const CartTooltip: React.FC<CartTooltipProps> = ({ products, total }) => {
  const totalCost = useSelector(cartTotalCostSelector)

  return total !== 0 ? (
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

          <Box sx={{ width: '100%', maxHeight: '300px', overflow: 'scroll' }}>
            {products?.map((cartProduct: any) => (
              <CartTooltipProduct cartItem={cartProduct} />
            ))}
          </Box>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',

              height: '100%',
            }}
          >
            <Typography sx={{ fontSize: 16 }}>
              TOTAL: {total} products
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
                bgcolor: 'Violet.600',
                width: '100%',
                ':hover': {
                  color: 'white',
                  bgcolor: 'Violet.900',
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

export default CartTooltip
