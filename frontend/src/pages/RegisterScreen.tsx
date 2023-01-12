import { Box, Button, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import register3 from '../assets/images/register3.svg'

const RegisterScreen: React.FC<any> = () => {
  return (
    // <Container>
    //   <Typography>awdaw</Typography>
    // </Container>
    <div
      style={{
        backgroundImage: `url(${register3})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          width: { xs: '100%', md: '80%' },
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        {/* <Box
          sx={{
            mt: 10,
            width: { md: '700px', sm: '70%', xs: '80%' },
            height: '100px',
            boxShadow: 2,
          }}
        >
          <Box
            sx={{ width: '100%', background: '#4a148c', height: '10px' }}
          ></Box>
          <Box
            sx={{ width: '100%', background: 'white', height: '100%' }}
          ></Box>
        </Box> */}
        <Paper
          sx={{
            mt: 10,
            width: { md: '700px', sm: '70%', xs: '80%' },
            height: '100px',
            boxShadow: 2,
          }}
          elevation={3}
        >
          <Box
            sx={{ width: '100%', background: '#4a148c', height: '10px' }}
          ></Box>
          <Box sx={{ width: '100%', height: '100%' }}></Box>
        </Paper>
      </Container>
    </div>
    //<div className="mainElement"></div>
  )
}

export default RegisterScreen
