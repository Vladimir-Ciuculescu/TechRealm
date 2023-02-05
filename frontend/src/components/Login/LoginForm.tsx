import {
  Box,
  FormHelperText,
  Grid,
  Link,
  Paper,
  Typography,
} from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CustomInputIcon from '../common/CustomInputIcon'
import * as Yup from 'yup'
import { IoMdMail } from 'react-icons/io'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import { LoadingButton } from '@mui/lab'
import { REGISTER_PATH, ROOT_PATH } from '../../constants/paths'
import { loginUserApi } from '../../services/userApi'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setUserAction } from '../../redux/user/actions'
import {
  addUserProductsApi,
  getUserProductsApi,
} from '../../services/productApi'
import { cartProductsIdsSelector } from '../../redux/cart/selectors'
import { addProductAction } from '../../redux/cart/actions'

const LoginForm: React.FC<any> = () => {
  const [passwordVisible, togglePasswordVisible] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)
  const [errorResponse, setErrorResponse] = useState<boolean>(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productsIds = useSelector(cartProductsIdsSelector)

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required('Email required '),
      password: Yup.string().required('Password required '),
    }),
    onSubmit: async (values) => {
      await handleLogin(values)
    },
  })

  interface loginProps {
    email: string
    password: string
  }

  const handleCartProducts = async (userId: number | string) => {
    if (productsIds.length !== 0) {
      await addUserProductsApi(userId, productsIds)
    }

    const response = await getUserProductsApi(userId)

    // for (let product of response!.products) {
    //   dispatch(addProductAction(product, product.quantity))
    // }
  }

  const handleLogin = async (values: loginProps) => {
    const { email, password } = values
    setLoading(true)
    try {
      const user = await loginUserApi(email, password)
      dispatch(setUserAction(user))
      handleCartProducts(user.id)
      navigate(ROOT_PATH)
    } catch (error: any) {
      setErrorResponse(error.response.data.error)
    }
    setLoading(false)
  }

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
        mb={4}
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
            type={passwordVisible ? 'text' : 'password'}
            placeholder="Password"
            toggleIcon={() => togglePasswordVisible(!passwordVisible)}
            icon={passwordVisible ? <AiFillEye /> : <AiFillEyeInvisible />}
            error={touched.password && errors.password}
          />
        </Grid>
        <Grid container direction="row" justifyContent="center" mt={2}>
          <Grid
            item
            xs={10}
            sm={10}
            md={5}
            sx={{ display: 'flex', justifyContent: 'flex-start' }}
          >
            <Link
              href={`${REGISTER_PATH}`}
              underline="none"
              sx={{
                cursor: 'pointer',
                color: 'black',
                '&:hover': { color: '#4a148c' },
              }}
            >
              Don't have an account ?
            </Link>
          </Grid>
          <Grid
            item
            xs={10}
            sm={10}
            md={5}
            sx={{ display: 'flex', justifyContent: 'flex-end' }}
          >
            <Link
              underline="none"
              sx={{
                cursor: 'pointer',
                color: 'black',
                '&:hover': { color: '#4a148c' },
              }}
            >
              Forgot password
            </Link>
          </Grid>
        </Grid>
        <Grid item md={10} sm={10} xs={10}>
          {errorResponse && (
            <FormHelperText sx={{ color: '#d3302f', fontSize: 15 }}>
              {errorResponse}
            </FormHelperText>
          )}
        </Grid>
        <Grid item xs={10} sm={10} md={10}>
          <LoadingButton
            disableRipple
            onClick={() => submitForm()}
            sx={{ width: '100%', textTransform: 'none', fontSize: 16 }}
            variant="contained"
          >
            Login
          </LoadingButton>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default LoginForm
