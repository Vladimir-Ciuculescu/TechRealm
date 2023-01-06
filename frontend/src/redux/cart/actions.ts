import {
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  SET_QUANTITY_PRODUCT,
} from './actionTypes'
import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'

export const addProductAction: ActionCreator<any> = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: { product },
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
