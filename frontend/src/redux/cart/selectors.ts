import { Selector, createSelector } from '@reduxjs/toolkit'

const cart = (state: any) => state.cart

export const cartSelector: Selector<any, any> = createSelector(
  [cart],
  ({ ...args }) => args,
)
