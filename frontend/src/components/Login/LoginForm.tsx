import { Box, Grid, Paper, Typography } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CustomInputIcon from '../common/CustomInputIcon'
import * as Yup from 'yup'
import { IoMdMail } from 'react-icons/io'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

const LoginForm: React.FC<any> = () => {
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email required '),
      password: Yup.string().required('Password required '),
    }),
    onSubmit: async (values) => {},
  })

  const { values, errors, touched, submitForm } = formik

  const handleInputChange = (value: any, label: string) => {
    formik.setFieldValue(label, value)

    formik.setFieldTouched(label, value !== '' ? false : true)
  }

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
        Login
      </Typography>

      <Grid
        container
        rowSpacing={2}
        direction="row"
        justifyContent="center"
        mt={2}
      >
        <Grid item xs={10} sm={10} md={10}>
          <CustomInputIcon
            onChange={(e) => handleInputChange(e.target.value, 'email')}
            value={values.email}
            type="text"
            placeholder="Email"
            icon={<IoMdMail />}
            error={touched.email && errors.email}
          />
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <CustomInputIcon
            onChange={(e) => handleInputChange(e.target.value, 'password')}
            value={values.password}
            type="password"
            placeholder="Password"
            toggleIcon={() => togglePasswordVisible(!passwordVisible)}
            icon={passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            error={touched.password && errors.password}
          />
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LoginForm
