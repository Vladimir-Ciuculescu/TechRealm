import {
  ADD_PATH,
  DELETE_PATH,
  EDIT_PATH,
  PRODUCTS_PATH,
  PRODUCT_PATH,
  TOTAL,
  USER_PATH,
} from '../constants/paths'
import { Image } from '../interfaces/Image'
import { Product } from '../interfaces/Product'
import { axiosInstance } from './axiosInstance'

export const getProductsApi = async (filterObject: any) => {
  try {
    const { data } = await axiosInstance.get<Product[]>(
      `/api${PRODUCTS_PATH}`,
      { params: filterObject },
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getProductsLengthApi = async () => {
  try {
    const result = await axiosInstance.get<any, any>(
      `/api${PRODUCTS_PATH}${TOTAL}`,
    )

    return result
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

export const addProductApi = async (product: Product) => {
  try {
    const { data } = await axiosInstance.post(
      `/api${PRODUCTS_PATH}${ADD_PATH}`,
      {
        product,
      },
    )
    return data
  } catch (error) {
    console.log(error)
  }
}

export const editProductApi = async (product: Product) => {
  try {
    await axiosInstance.put(`/api${PRODUCTS_PATH}${EDIT_PATH}`, product)
  } catch (error) {
    console.log(error)
  }
}

export const deleteProductApi = async (products: Product[]) => {
  try {
    await axiosInstance.delete<any>(`api${PRODUCT_PATH}${DELETE_PATH}`, {
      data: { products: products },
    })
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
    await axiosInstance.post<any>(`api${PRODUCTS_PATH}/user/${userId}/get`, {
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
    await axiosInstance.post<any>(`api${PRODUCT_PATH}/user/${userId}/add`, {
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
    await axiosInstance.delete<any>(
      `api${PRODUCT_PATH}/user/${userId}${DELETE_PATH}`,
      {
        data: { product: product },
      },
    )
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
    await axiosInstance.post<any>(
      `api${PRODUCT_PATH}/user/${userId}/update-quantity`,
      {
        productId: productId,
        quantity: quantity,
      },
    )
  } catch (error) {
    console.log(error)
  }
}
