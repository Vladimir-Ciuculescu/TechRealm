import { Container } from '@mui/system'
import React from 'react'
import { AuthLayout } from '../assets/layouts'
import LoginForm from '../components/Login/LoginForm'

const LoginScreen: React.FC<any> = () => {
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
        <LoginForm />
      </Container>
    </div>
  )
}

export default LoginScreen
