import { Container } from '@mui/system'
import React from 'react'
import register_screen_background from '../assets/images/register_screen_background.svg'
import LoginForm from '../components/Login/LoginForm'

const LoginScreen: React.FC<any> = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${register_screen_background})`,
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
