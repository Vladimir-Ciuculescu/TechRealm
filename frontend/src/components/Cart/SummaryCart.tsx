import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Paper,
  Typography,
} from '@mui/material'
import React from 'react'
import { cartTotalCostSelector } from '../../redux/cart/selectors'
import { useSelector } from 'react-redux'

export const SummaryCart: React.FC<any> = () => {
  const totalCost = useSelector(cartTotalCostSelector)

  return (
    <Paper elevation={1}>
      <Card
        variant="outlined"
        sx={{ paddingX: 2, borderColor: 'transparent', borderRadius: 2 }}
      >
        <CardContent>
          <Typography
            sx={{ fontWeight: 600, color: '#404040' }}
            variant="h5"
            component="div"
          >
            Order summary
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                pt: 3,
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 700,
                }}
              >
                Subtotal
              </Typography>
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
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Typography
                sx={{
                  fontSize: 18,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 700,
                }}
              >
                Shipping
              </Typography>

              <Typography
                sx={{
                  fontSize: 18,
                  color: '#404040',
                  fontFamily: 'Source Sans Pro',
                  fontWeight: 700,
                }}
              >
                {(totalCost / 10).toFixed(2)}$
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Divider
              sx={{
                borderBottomWidth: 2,
                background: '#cfcfcf',
                mt: 2,
                mb: 2,
                width: '100%',
              }}
            />
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <Typography
              sx={{
                fontSize: 24,
                color: '#404040',
                fontFamily: 'Source Sans Pro',
                fontWeight: '1000',
              }}
            >
              Your total
            </Typography>
            <Typography
              sx={{
                fontSize: 24,
                color: '#404040',
                fontFamily: 'Source Sans Pro',
                fontWeight: '1000',
              }}
            >
              {(totalCost + totalCost / 10).toFixed(2)}$
            </Typography>
          </Box>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: 2 }}>
          <Button
            sx={{
              textTransform: 'none',
              width: '100%',
              bgcolor: 'Violet.600',
              ':hover': {
                bgcolor: 'Violet.900',
              },
            }}
            variant="contained"
          >
            Proceed to checkout
          </Button>
        </CardActions>
      </Card>
    </Paper>
  )
}
