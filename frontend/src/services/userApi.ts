import { LOGIN_PATH } from '../constants/paths'
import { axiosInstance } from './axiosInstance'

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
}

export const loginApi = async (email: string, password: string) => {
  try {
    const { data } = await axiosInstance.post<any>(`/api/${LOGIN_PATH}`, {
      email,
      password,
      config,
    })
    return data
  } catch (error) {
    console.log(error)
  }
}
