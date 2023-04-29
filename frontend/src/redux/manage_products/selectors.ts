import { Selector, createSelector } from '@reduxjs/toolkit'
import ManageProducts from '../../pages/ManageProductsScreen'

const manageProductsSelector = (state: any) => state.manageProducts

export const productsSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (manageProducts) => manageProducts.products,
)

export const selectedProductsSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (ManageProducts) => ManageProducts.selectedProducts,
)
