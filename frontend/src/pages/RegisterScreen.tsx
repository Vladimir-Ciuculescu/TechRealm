import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Paper,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import register3 from '../assets/images/register3.svg'
import TextField from '@mui/material/TextField'
import AccountCircle from '@mui/icons-material/AccountCircle'
import { AiOutlineMail } from 'react-icons/ai'
import CustomInputIcon from '../components/common/CustomInputIcon'
import { FaUserAlt } from 'react-icons/fa'
import styled from '@emotion/styled'
import { IoMdMail } from 'react-icons/io'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { ImLock } from 'react-icons/im'
import CustomRadioButton from '../components/common/CustomRadioButton'

const RegisterScreen: React.FC<any> = () => {
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false)

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
              md: '600px',
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
              mt: 4,
              mb: 4,
            }}
          >
            Create a new account
          </Typography>

          <Grid
            container
            rowSpacing={2}
            direction="row"
            justifyContent="center"
            mt={2}
          >
            <Grid
              container
              direction="row"
              columnSpacing={2}
              rowSpacing={2}
              justifyContent="center"
            >
              <Grid item xs={10} sm={10} md={5}>
                <CustomInputIcon
                  type="text"
                  placeholder="First Name"
                  value=""
                  icon={<FaUserAlt />}
                />
              </Grid>
              <Grid item xs={10} sm={10} md={5}>
                <CustomInputIcon
                  type="text"
                  placeholder="Last Name"
                  value=""
                  icon={<FaUserAlt />}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                type="text"
                placeholder="Email"
                value=""
                icon={<IoMdMail />}
              />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                value=""
                toggleIcon={() => togglePasswordVisible(!passwordVisible)}
                icon={passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
              />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                type="text"
                placeholder="Re-type Password"
                value=""
                icon={<ImLock />}
              />
            </Grid>
          </Grid>
          <Grid
            container
            rowSpacing={2}
            direction="row"
            justifyContent="center"
            mt={2}
            mb={4}
            columnSpacing={0}
          >
            <Grid
              container
              direction="row"
              columnSpacing={2}
              rowSpacing={{ md: 2, xs: 2 }}
              justifyContent="center"
            >
              <Grid item xs={10} sm={10} md={5}>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="disabled"
                      control={<CustomRadioButton />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="male"
                      control={<CustomRadioButton />}
                      label="Female"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={10} sm={10} md={5}></Grid>
              <Grid item md={10} sm={10} xs={10}>
                <Button
                  sx={{ width: '100%', textTransform: 'none', fontSize: 16 }}
                  variant="contained"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  )
}

export default RegisterScreen
