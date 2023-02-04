import {
  ADD_PRODUCT,
  CLEAR_CART,
  REMOVE_PRODUCT,
  SET_CART,
  SET_QUANTITY_PRODUCT,
} from './actionTypes'
import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'

export const addProductAction: ActionCreator<any> = (
  product: Product,
  quantity: number,
) => ({
  type: ADD_PRODUCT,
  payload: { product, quantity },
})

export const removeProductAction: ActionCreator<any> = (product: Product) => ({
  type: REMOVE_PRODUCT,
  payload: { product },
})

export const setQuantityProductAction: ActionCreator<any> = (
  product: Product,
  quantity: number,
) => ({
  type: SET_QUANTITY_PRODUCT,
  payload: { product, quantity },
})

export const setCartAction: ActionCreator<any> = (products: Product[]) => ({
  type: SET_CART,
  payload: products,
})

export const clearCartAction: ActionCreator<any> = () => ({
  type: CLEAR_CART,
})
