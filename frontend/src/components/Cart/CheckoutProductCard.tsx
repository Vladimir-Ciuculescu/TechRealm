import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { Product } from '../../interfaces/Product'
import { SelectOption } from '../../interfaces/SelectOption'
import { CommonSelect } from '../common/CommonSelect'
import { FiHeart } from 'react-icons/fi'
import { useTheme } from '@mui/material/styles'
import { IoCloseOutline } from 'react-icons/io5'
import useMediaQuery from '@mui/material/useMediaQuery'

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

  const isLessThan1500px = useMediaQuery('(min-width:1500px)')

  const { name, defaultImage, price } = cartItem

  return (
    <Paper
      elevation={1}
      sx={{ width: '100%', background: 'white', borderRadius: 2, padding: 2 }}
    >
      <Grid container direction="row" columnGap={{ md: 1 }} rowGap={{ xs: 1 }}>
        <Grid
          item
          sx={{ background: 'red' }}
          md={isLessThan1500px ? 2 : 4}
          sm={6}
          xs={6}
        >
          <img src={defaultImage} width="100%" alt="" />
        </Grid>
        <Grid item md={isLessThan1500px ? 3 : 5} sm={6} xs={6}>
          <Typography
            whiteSpace={'break-spaces'}
            fontWeight="bold"
            variant="h4"
          >
            {name}
          </Typography>
        </Grid>
        <Grid
          container
          item
          md={isLessThan1500px ? 1.5 : 3}
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
          md={isLessThan1500px ? 1 : 2}
          xs={3}
          sm={3}
          sx={{
            alignItems: 'center',
          }}
          direction="row"
          columnGap={2}
        >
          <CommonSelect
            options={options}
            placeholder=""
            displayDropdownIndicator="none"
            displayindicatorSeparator="none"
            width="100%"
          />
        </Grid>
        <Grid
          container
          item
          md={isLessThan1500px ? 1.5 : 3}
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
            $45454
          </Typography>
        </Grid>

        <Grid
          container
          item
          //md={3}
          md={isLessThan1500px ? 1.5 : 3}
          sm={3}
          xs={3}
          direction="column"
          justifyContent="center"
          alignItems="flex-end"
          rowGap={3}
          pr={2}
        >
          <Grid item>
            <FiHeart color="red" fontSize={isSmallScreen ? 25 : 35} />
          </Grid>
          <Grid item>
            <IoCloseOutline
              fontSize={isSmallScreen ? 25 : 35}
              color="#4a148c"
            />
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default CheckoutProductCard
