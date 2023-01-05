import { Box, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { cartSelector } from '../redux/cart/selectors'
import CheckoutProductCard from '../components/Cart/CheckoutProductCard'
import { SummaryCart } from '../components/Cart/SummaryCart'

const CartScreen: React.FC<any> = () => {
  const { cartProducts } = useSelector(cartSelector)

  return (
    <Container
      maxWidth={false}
      sx={{ width: { xs: '100%', md: '80%' }, mt: 6 }}
    >
      <Typography
        variant="h3"
        sx={{
          paddingBottom: 5,
          fontWeight: '700',
          fontFamily: 'Source Sans Pro',
        }}
      >
        Your products
      </Typography>
      <Grid container direction="row" columnGap={2}>
        <Grid item xs={12} md={9}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              background: '#e3f1f9',
              borderRadius: 2,
              opacity: 0.8,
              paddingTop: 4,
              paddingX: 3,
              gap: 2,
              paddingBottom: 3,
            }}
          >
            {cartProducts.map((cartItem: any) => (
              <CheckoutProductCard cartItem={cartItem} />
            ))}
          </Box>
        </Grid>
        <Grid container item xs={12} md={2.5} sm={12} direction="column">
          <SummaryCart />
        </Grid>
      </Grid>
    </Container>
  )
}

export default CartScreen
