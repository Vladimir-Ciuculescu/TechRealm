import { PRODUCTS_PATH, USER_PATH } from '../constants/paths'
import { Image } from '../interfaces/Image'
import { Product } from '../interfaces/Product'
import { axiosInstance } from './axiosInstance'

export const getProductsApi = async () => {
  try {
    const { data } = await axiosInstance.get<Product[]>(`/api${PRODUCTS_PATH}`)
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
      `/api${PRODUCTS_PATH}/${productId}`,
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getUserProductsApi = async (userId: number | string) => {
  interface UserProductsApiInterface {
    products: Product[]
    total: number
  }

  try {
    const { data } = await axiosInstance.get<UserProductsApiInterface>(
      `/api${PRODUCTS_PATH}${USER_PATH}/${userId}`,
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addUserProductsApi = async (
  userId: number | string,
  productsIds: Product[],
) => {
  try {
    await axiosInstance.post<any>(`api/products/user/${userId}`, {
      productsIds,
    })
  } catch (error) {
    console.log(error)
  }
}
