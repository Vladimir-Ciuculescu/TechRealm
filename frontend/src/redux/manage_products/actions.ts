import { ActionCreator } from 'redux'
import { Product } from '../../interfaces/Product'
import {
  ADD_PRODUCT,
  SELECT_ALL_PRODUCTS,
  SELECT_PRODUCT,
  SET_CURRENT_PRODUCT,
  SET_PAGES,
  SET_PRODUCTS,
  SET_ROWS_PER_PAGE,
  SET_SELECTED_PRODUCT,
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

export const setCurrentProductAction: ActionCreator<any> = (
  product: Product,
) => ({
  type: SET_CURRENT_PRODUCT,
  payload: product,
})

export const setSelectedProductsAction: ActionCreator<any> = (
  selectedProducts: Product[],
) => ({
  type: SET_SELECTED_PRODUCT,
  payload: selectedProducts,
})

export const setRowsPerPageAction: ActionCreator<any> = (
  rowsPerPage: number,
) => ({ type: SET_ROWS_PER_PAGE, payload: rowsPerPage })

export const setProductPagesAction: ActionCreator<any> = (pages: number) => ({
  type: SET_PAGES,
  payload: pages,
})
