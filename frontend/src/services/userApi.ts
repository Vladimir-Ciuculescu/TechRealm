import { LOGIN_PATH, REGISTER_PATH } from '../constants/paths'
import { RegisterData } from '../interfaces/RegisterData'
import { axiosInstance } from './axiosInstance'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const registerUserApi = async (registerData: RegisterData) => {
  await axiosInstance.post<any>(`/api/users${REGISTER_PATH}`, {
    registerData,
    config,
  })
}

export const loginUserApi = async (email: string, password: string) => {
  // try {
  //   const { data } = await axiosInstance.post<any>(`/api/${LOGIN_PATH}`, {
  //     email,
  //     password,
  //     config,
  //   })
  //   return data
  // } catch (error) {
  //   console.log(error)
  // }

  const { data } = await axiosInstance.post<any>(`/api/users${LOGIN_PATH}`, {
    email,
    password,
    config,
  })

  return data

  // await axiosInstance.post<any>(`/api/users${LOGIN_PATH}`, {
  //   email,
  //   password,
  //   config,
  // })
}
