import { PRODUCTS_PATH } from '../constants/paths'
import { Image } from '../interfaces/Image'
import { Product } from '../interfaces/Product'
import { axiosInstance } from './axiosInstance'

export const getProductsApi = async () => {
  try {
    const { data } = await axiosInstance.get<Product[]>(`/api/${PRODUCTS_PATH}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProductApi = async (productId: number | string) => {
  interface ProductsApiInterface {
    product: Product
    images: Image[]
  }
  try {
    const { data } = await axiosInstance.get<ProductsApiInterface>(
      `/api/${PRODUCTS_PATH}/${productId}`,
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
