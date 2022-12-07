import { Selector, createSelector } from '@reduxjs/toolkit'

const product = (state: any) => state.product

export const productSelector: Selector<any, any> = createSelector(
  [product],
  ({ ...args }) => args,
)
