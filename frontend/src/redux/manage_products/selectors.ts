import { Selector, createSelector } from '@reduxjs/toolkit'

const manageProductsSelector = (state: any) => state.manageProducts

export const productsSelector: Selector<any, any> = createSelector(
  [manageProductsSelector],
  (manageProducts) => manageProducts.products,
)
