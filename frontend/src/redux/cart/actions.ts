import { ADD_PRODUCT, REMOVE_PRODUCT } from './actionTypes'
import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'

export const addProductAction: ActionCreator<any> = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: { product },
})
