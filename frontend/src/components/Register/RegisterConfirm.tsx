import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import user_registered from '../../assets/images/user_registered.png'
import { ROOT_PATH } from '../../constants/paths'

const RegisterConfirm: React.FC<any> = () => {
  const navigate = useNavigate()

  return (
    <Paper
      sx={{
        mt: 10,
        width: {
          md: '600px',
          sm: '70%',
          xs: '80%',
        },

        boxShadow: 2,
      }}
      elevation={3}
    >
      <Box sx={{ width: '100%', background: '#4a148c', height: '10px' }}></Box>

      <Grid container direction="column">
        <Grid item sx={{ background: 'red' }}>
          <img
            src={user_registered}
            width="100%"
            height="75%"
            alt="User succesfully registered !"
          />
        </Grid>
        <Grid item>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 30,
              color: '#404040',

              fontWeight: 700,
              fontFamily: 'BlinkMacSystemFont',
              mt: 4,
              mb: 4,
            }}
          >
            User succesfully created !
          </Typography>
        </Grid>
        <Grid item sx={{ display: 'flex', justifyContent: 'center' }} pb={2}>
          <Button onClick={() => navigate(ROOT_PATH)} variant="text">
            Go back to shop
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default RegisterConfirm
