import {
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import React, { useState } from 'react'
import { HiChevronDoubleRight } from 'react-icons/hi'
import { IoCloseOutline } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux'
import { CartProduct } from '../../../interfaces/CartProduct'
import { removeProductAction } from '../../../redux/cart/actions'
import {
  cartProductsSelector,
  cartTotalCostSelector,
  cartTotalProductsSelector,
} from '../../../redux/cart/selectors'

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

const CartTooltip: React.FC<any> = () => {
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

export default CartTooltip
