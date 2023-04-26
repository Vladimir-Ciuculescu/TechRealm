import { Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
// import register_screen_background from '../assets/images/register_screen_background.svg'
import { AuthLayout } from '../assets/layouts'
import RegisterConfirm from '../components/Register/RegisterConfirm'

import RegisterForm from '../components/Register/RegisterForm'

const RegisterScreen: React.FC<any> = () => {
  const [userCreated, setUserCreated] = useState(false)

  const showConfirmation = () => {
    setUserCreated(true)
  }

  return (
    <div
      style={{
        backgroundImage: `url(${AuthLayout})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '95vh',
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
        {userCreated ? (
          <RegisterConfirm />
        ) : (
          <RegisterForm showConfirmation={showConfirmation} />
        )}
      </Container>
    </div>
  )
}

export default RegisterScreen
