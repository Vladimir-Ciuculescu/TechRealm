import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useState } from 'react'
import register3 from '../assets/images/register3.svg'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { AiOutlineMail } from 'react-icons/ai'
import CustomInputIcon from '../components/common/CustomInputIcon'
import { FaUserAlt } from 'react-icons/fa'

const RegisterScreen: React.FC<any> = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  return (
    <div
      style={{
        backgroundImage: `url(${register3})`,
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
        <Paper
          sx={{
            mt: 10,
            width: {
              md: '500px',
              sm: '70%',
              xs: '80%',
            },

            boxShadow: 2,
          }}
          elevation={3}
        >
          <Box
            sx={{ width: '100%', background: '#4a148c', height: '10px' }}
          ></Box>

          <Typography
            sx={{
              textAlign: 'center',
              fontSize: 30,
              color: '#404040',

              fontWeight: 700,
              fontFamily: 'BlinkMacSystemFont',
            }}
          >
            Create a new account
          </Typography>

          <Grid container rowSpacing={1} justifyContent="center">
            <Grid
              item
              xs={9}
              sm={9}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CustomInputIcon
                placeholder={'First Name'}
                value=""
                icon={<FaUserAlt />}
              />
            </Grid>
            <Grid
              item
              xs={9}
              sm={9}
              md={6}
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <CustomInputIcon
                placeholder={'Last Name'}
                value=""
                icon={<FaUserAlt />}
              />
            </Grid>
          </Grid>
          <Grid container justifyContent="center"></Grid>
        </Paper>
      </Container>
    </div>
  )
}

interface CustomInputIconProps {
  value: string
  icon: JSX.Element
}

const TestInput: React.FC<CustomInputIconProps> = ({ value, icon }) => {
  return (
    //<Typography sx={{ textAlign: 'center', background: 'red' }}>1</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row' }} width="100%">
      <Box
        sx={{
          display: 'flex',
          color: 'action.active',
          justifyContent: 'center',
          alignItems: 'center',
          borderTop: '3px solid #e2e2e2',
          borderBottom: '3px solid #e2e2e2',
          borderLeft: '3px solid #e2e2e2',
        }}
      >
        {icon}
      </Box>
      <TextField
        sx={{ border: '3px solid #e2e2e2', pl: 1, py: 0.5 }}
        label=""
        variant="standard"
        InputProps={{ disableUnderline: true }}
      />
    </Box>
  )
}

export default RegisterScreen
