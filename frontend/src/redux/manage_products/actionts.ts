import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'
import {
  ADD_PRODUCT,
  SELECT_ALL_PRODUCTS,
  SELECT_PRODUCT,
  SET_PRODUCTS,
  UNSELECT_ALL_PRODUCTS,
  UNSELECT_PRODUCT,
} from './actionTypes'

export const selectProductAction: ActionCreator<any> = (product: Product) => ({
  type: SELECT_PRODUCT,
  payload: product,
})

export const addProductAction: ActionCreator<any> = (product: Product) => ({
  type: ADD_PRODUCT,
  payload: product,
})

export const unselectProductAction: ActionCreator<any> = (
  product: Product,
) => ({ type: UNSELECT_PRODUCT, payload: product })

export const selectAllProductsAction: ActionCreator<any> = (
  products: Product[],
) => ({ type: SELECT_ALL_PRODUCTS, payload: products })

export const unselectAllProductsAction: ActionCreator<any> = () => ({
  type: UNSELECT_ALL_PRODUCTS,
})

export const setProductsAction: ActionCreator<any> = (products: Product[]) => ({
  type: SET_PRODUCTS,
  payload: products,
})
