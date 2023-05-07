import {
  LOGIN_PATH,
  MANAGE_USERS_PATH,
  PROFILE_PATH,
  REGISTER_PATH,
  USERS_PATH,
  USER_PATH,
} from '../constants/paths'
import { RegisterData } from '../interfaces/RegisterData'
import { User } from '../interfaces/User'
import { axiosInstance } from './axiosInstance'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getUsersApi = async () => {
  try {
    const { data } = await axiosInstance.get(`/api${USERS_PATH}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const registerUserApi = async (registerData: RegisterData) => {
  await axiosInstance.post<any>(`/api/users${REGISTER_PATH}`, {
    registerData,
    config,
  })
}

export const loginUserApi = async (email: string, password: string) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const { data } = await axiosInstance.post<any>(
    `/api/users${LOGIN_PATH}`,
    {
      email,
      password,
    },
    config,
  )

  return data
}

export const getCurrentUserApi = async (token: string) => {
  try {
    const { data } = await axiosInstance.get<User>(
      `/api/${USER_PATH}${PROFILE_PATH}`,
      { headers: { Authorization: `Bearer ${token}` } },
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
