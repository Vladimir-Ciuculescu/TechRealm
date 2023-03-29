import { Brand } from '../interfaces/Brand'
import { axiosInstance } from './axiosInstance'

export const getBrandsApi = async () => {
  try {
    const { data } = await axiosInstance.get<Brand[]>('/api/brands')
    return data
  } catch (error) {
    console.log(error)
  }
}
