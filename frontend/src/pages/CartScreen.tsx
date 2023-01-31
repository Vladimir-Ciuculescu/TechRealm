import {
  Box,
  Button,
  Grid,
  Paper,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  cartProductsSelector,
  cartTotalProductsSelector,
} from '../redux/cart/selectors'
import CheckoutProductCard from '../components/Cart/CheckoutProductCard'
import { SummaryCart } from '../components/Cart/SummaryCart'
import { useNavigate } from 'react-router-dom'
import { ROOT_PATH } from '../constants/paths'
import { isUserLoggedSelector, userIdSelector } from '../redux/user/selectors'
import { Product } from '../interfaces/Product'
import { getUserProductsApi } from '../services/productApi'

const CartScreen: React.FC<any> = () => {
  const isBiggerThan1500px = useMediaQuery('(min-width:1500px)')
  const cartProducts = useSelector(cartProductsSelector)
  const totalProducts = useSelector(cartTotalProductsSelector)
  const isLogged = useSelector(isUserLoggedSelector)
  const userId = useSelector(userIdSelector)
  const navigate = useNavigate()
  const [products, setProducts] = useState<Product[] | undefined>([])

  useEffect(() => {
    const getUserProducts = async () => {
      if (isLogged) {
        const response = await getUserProductsApi(userId)
        setProducts(response)
      } else {
        setProducts(cartProducts)
      }
    }

    getUserProducts()
  }, [])

  return totalProducts !== 0 ? (
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
      <Grid container direction="row" columnGap={2} rowGap={3}>
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
            <Paper
              elevation={1}
              sx={{
                width: '100%',
                background: 'white',
                borderRadius: 2,
                padding: 2,
                display: isBiggerThan1500px ? 'flex' : 'none',
              }}
            >
              <Grid container direction="row" columnGap={{ md: 1 }}>
                <Grid item md={isBiggerThan1500px ? 2 : 4}></Grid>
                <Grid item md={isBiggerThan1500px ? 3 : 5}>
                  <Typography
                    fontWeight="bold"
                    variant="h4"
                    sx={{ fontFamily: 'Source Sans Pro' }}
                  >
                    Product
                  </Typography>
                </Grid>

                <Grid
                  container
                  item
                  md={isBiggerThan1500px ? 1.5 : 3}
                  sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: '#404040',
                      fontFamily: 'Source Sans Pro',
                      fontWeight: '1000',
                    }}
                  >
                    Unit price
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  md={isBiggerThan1500px ? 1 : 2}
                  sx={{ justifyContent: 'center' }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: '#404040',
                      fontFamily: 'Source Sans Pro',
                      fontWeight: '1000',
                    }}
                  >
                    Pieces
                  </Typography>
                </Grid>
                <Grid
                  container
                  item
                  md={isBiggerThan1500px ? 1.5 : 3}
                  sx={{
                    justifyContent: 'center',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: '#404040',
                      fontFamily: 'Source Sans Pro',
                      fontWeight: '1000',
                    }}
                  >
                    Total Cost
                  </Typography>
                </Grid>
                <Grid
                  item
                  container
                  direction="column"
                  md={isBiggerThan1500px ? 1.5 : 3}
                  ml={isBiggerThan1500px ? 6 : 0}
                  sx={{
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-end',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 18,
                      color: '#404040',
                      fontFamily: 'Source Sans Pro',
                      fontWeight: '1000',
                    }}
                  >
                    Actions
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            {products?.map((cartItem: any) => (
              <CheckoutProductCard cartItem={cartItem} />
            ))}
          </Box>
        </Grid>

        <Grid container item xs={12} md={2.5} sm={12} direction="column">
          <SummaryCart />
        </Grid>
      </Grid>
    </Container>
  ) : (
    <Container
      maxWidth={false}
      sx={{
        width: { xs: '100%', md: '80%' },
        height: '88%',
        mt: 6,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          pb: 40,
          gap: 6,
        }}
      >
        <Typography variant="h3">
          You don't have any products added to cart
        </Typography>
        <Button onClick={() => navigate(ROOT_PATH)} variant="contained">
          Go to Shop
        </Button>
      </Box>
    </Container>
  )
}

export default CartScreen
