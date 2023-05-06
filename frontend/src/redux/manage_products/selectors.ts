import { Selector, createSelector } from '@reduxjs/toolkit'

const manageProductsSelector = (state: any) => state.manageProducts

export const productsSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (manageProducts) => manageProducts.products,
)

export const selectedProductsSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (ManageProducts) => ManageProducts.selectedProducts,
)

export const filterObjectSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (manageProducts) => manageProducts.filterObject,
)

export const currentProductSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (manageProducts) => manageProducts.currentProduct,
)
