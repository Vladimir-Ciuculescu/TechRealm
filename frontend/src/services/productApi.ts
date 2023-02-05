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

export const addUserProductApi = async (
  userId: number | string,
  productId: number | string,
  quantitiy: number,
) => {
  try {
    await axiosInstance.post<any>(`api/product/user/${userId}`, {
      productId,
      quantity: quantitiy,
    })
  } catch (error) {
    console.log(error)
  }
}

export const deleteUserProductApi = async (
  userId: number | string,
  product: Product,
) => {
  try {
    await axiosInstance.delete<any>(`api/product/user/${userId}`, {
      data: { product: product },
    })
  } catch (error) {
    console.log(error)
  }
}

export const updateUserProductQuantityApi = async (
  userId: number | string,
  productId: number | string,
  quantity: number,
) => {
  try {
    await axiosInstance.post<any>(`api/product/user/${userId}`, {
      productId: productId,
      quantity: quantity,
    })
  } catch (error) {
    console.log(error)
  }
}
