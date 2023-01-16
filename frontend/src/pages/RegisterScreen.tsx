import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Paper,
  RadioGroup,
  Typography,
} from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect, useState } from 'react'
import register3 from '../assets/images/register3.svg'
import CustomInputIcon from '../components/common/CustomInputIcon'
import { FaUserAlt } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { ImLock } from 'react-icons/im'
import CustomRadioButton from '../components/common/CustomRadioButton'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const RegisterScreen: React.FC<any> = () => {
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      repeatPassword: '',
      gender: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First name required '),
      lastName: Yup.string().required('Last name required '),
      email: Yup.string()
        .email(`That's not a proper email address !`)
        .required('Email required '),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be of 6 characters'),
      repeatPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], "Passwords don't match!")
        .required('Retype your password '),
      gender: Yup.string().required('Please select you gender '),
    }),
    onSubmit: (values) => {},
  })

  const { values, errors, submitForm, isSubmitting, handleChange, touched } =
    formik

  const handleInputChange = (value: any, label: string) => {
    formik.setFieldValue(label, value)

    formik.setFieldTouched(label, value !== '' ? false : true)
  }

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
                  value={values.firstName}
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'firstName')
                  }
                  type="text"
                  placeholder="First Name"
                  icon={<FaUserAlt />}
                  error={touched.firstName && errors.firstName}
                  isValid={touched.firstName && !errors.firstName}
                  touched={touched.firstName}
                />
              </Grid>
              <Grid item xs={10} sm={10} md={5}>
                <CustomInputIcon
                  value={values.lastName}
                  onChange={(e) =>
                    handleInputChange(e.target.value, 'lastName')
                  }
                  type="text"
                  placeholder="Last Name"
                  icon={<FaUserAlt />}
                  error={touched.lastName && errors.lastName}
                  isValid={touched.lastName && !errors.lastName}
                />
              </Grid>
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                value={values.email}
                onChange={(e) => handleInputChange(e.target.value, 'email')}
                type="text"
                placeholder="Email"
                icon={<IoMdMail />}
                error={touched.email && errors.email}
                isValid={touched.email && !errors.email}
              />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                value={values.password}
                onChange={(e) => handleInputChange(e.target.value, 'password')}
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Password"
                toggleIcon={() => togglePasswordVisible(!passwordVisible)}
                icon={passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
                error={touched.password && errors.password}
                isValid={touched.password && !errors.password}
              />
            </Grid>
            <Grid item xs={10} sm={10} md={10}>
              <CustomInputIcon
                value={values.repeatPassword}
                onChange={(e) =>
                  handleInputChange(e.target.value, 'repeatPassword')
                }
                type="password"
                placeholder="Re-type Password"
                icon={<ImLock />}
                error={touched.repeatPassword && errors.repeatPassword}
                isValid={touched.repeatPassword && !errors.repeatPassword}
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
                    onChange={(e) =>
                      handleInputChange(e.target.value, 'gender')
                    }
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="male"
                      control={<CustomRadioButton />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="female"
                      control={<CustomRadioButton />}
                      label="Female"
                    />
                  </RadioGroup>
                  {errors.gender && touched.gender && (
                    <FormHelperText sx={{ color: '#d3302f', fontSize: 15 }}>
                      {errors.gender}
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={10} sm={10} md={5}></Grid>
              <Grid item md={10} sm={10} xs={10}>
                <Button
                  disableRipple
                  onClick={() => submitForm()}
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
