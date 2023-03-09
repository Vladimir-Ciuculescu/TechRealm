import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'
import { SELECT_PRODUCT, UNSELECT_PRODUCT } from './actionTypes'

export const selectProductAction: ActionCreator<any> = (product: Product) => ({
  type: SELECT_PRODUCT,
  payload: product,
})

export const unselectProductAction: ActionCreator<any> = (
  product: Product,
) => ({ type: UNSELECT_PRODUCT, payload: product })
