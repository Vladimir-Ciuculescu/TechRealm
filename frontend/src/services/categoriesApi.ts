import { axiosInstance } from './axiosInstance'
import { Category } from '../interfaces/Category'
import { CATEGORIES } from '../constants/paths'

export const getCategoriesApi = async () => {
  try {
    const { data } = await axiosInstance.get<Category[]>(`/api${CATEGORIES}`)
    return data
  } catch (error) {
    console.log(error)
  }
}
