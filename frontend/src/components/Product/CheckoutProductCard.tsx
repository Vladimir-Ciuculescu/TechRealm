import { Box, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../interfaces/Product'
import { SelectOption } from '../../interfaces/SelectOption'
import { CommonSelect } from '../common/CommonSelect'
import { BsFillTrashFill } from 'react-icons/bs'
import { FiHeart } from 'react-icons/fi'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

const options: SelectOption[] = [
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 5, label: '5' },
]

interface CheckoutProductCardProps {
  cartItem: Product
}

const CheckoutProductCard: React.FC<CheckoutProductCardProps> = ({
  cartItem,
}) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const { name, defaultImage, price } = cartItem

  return (
    <Box
      sx={{
        width: '100%',
        background: 'white',
        borderRadius: 2,
        boxShadow: 6,
        padding: 2,
      }}
    >
      <Grid container direction="row">
        <Grid item md={3} sm={6} xs={6}>
          <img alt="" src={defaultImage} width={150} height={150} />
        </Grid>
        <Grid container direction="column" item md={3} sm={6} xs={6} rowGap={3}>
          <Grid>
            <Typography fontWeight="bold" variant="h4">
              {name}
            </Typography>
          </Grid>
          <Grid container direction="row" columnGap={2}>
            <Grid item>
              <Typography>Availability:</Typography>
            </Grid>
            <Grid item>In stock</Grid>
          </Grid>
        </Grid>

        <Grid
          container
          item
          md={3}
          xs={6}
          sm={6}
          sx={{
            alignItems: 'center',
            justifyContent: 'flex-start',
          }}
          direction="row"
          columnGap={2}
          pl={2}
        >
          <Grid item md={5}>
            <CommonSelect options={options} placeholder={''} />
          </Grid>
          <Grid item md={5}>
            <Typography sx={{ fontWeight: '700' }}>buc</Typography>
          </Grid>
        </Grid>

        <Grid
          container
          item
          md={3}
          sm={6}
          xs={6}
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',

              width: '50%',
              alignItems: 'center',
              rowGap: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 600, color: 'black', fontFamily: 'sans-serif' }}
            >
              {price}$
            </Typography>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: 3,
                justifyContent: 'center',
              }}
            >
              <FiHeart color="red" fontSize={isSmallScreen ? 25 : 35} />
              <BsFillTrashFill
                fontSize={isSmallScreen ? 25 : 35}
                color="#4a148c"
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default CheckoutProductCard
