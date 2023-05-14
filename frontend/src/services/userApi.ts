import {
  LOGIN_PATH,
  MANAGE_USERS_PATH,
  PROFILE_PATH,
  REGISTER_PATH,
  TOTAL,
  USERS_PATH,
  USER_PATH,
  DELETE_PATH,
} from '../constants/paths'
import { RegisterData } from '../interfaces/RegisterData'
import { User } from '../interfaces/User'
import { axiosInstance } from './axiosInstance'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const getUsersApi = async (filterObject: any) => {
  try {
    const { data } = await axiosInstance.get(`/api${USERS_PATH}`, {
      params: filterObject,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getUsersLengthApi = async () => {
  try {
    const result = await axiosInstance.get<any, any>(
      `/api${USERS_PATH}${TOTAL}`,
    )
    return result
  } catch (error) {
    console.log(error)
  }
}

export const deleteUserApi = async (user: User) => {
  try {
    await axiosInstance.delete<any>(`api${USERS_PATH}${DELETE_PATH}`, {
      data: { user: user },
    })
  } catch (error) {
    console.log(error)
  }
}

export const registerUserApi = async (registerData: RegisterData) => {
  await axiosInstance.post<any>(`/api${USERS_PATH}${REGISTER_PATH}`, {
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
    `/api${USERS_PATH}${LOGIN_PATH}`,
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
