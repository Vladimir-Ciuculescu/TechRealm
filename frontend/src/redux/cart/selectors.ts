import { Selector, createSelector } from '@reduxjs/toolkit'
import { CartProduct } from '../../interfaces/CartProduct'

const cartSelector = (state: any) => state.cart

export const cartProductsSelector: Selector<any, any> = createSelector(
  [cartSelector],
  (cart) => cart.cartProducts,
)

export const cartTotalProductsSelector: Selector<any, any> = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (currentValue: number, cartItem: CartProduct) =>
        currentValue + cartItem.quantity,
      0,
    ),
)

export const cartTotalCost: Selector<any, any> = createSelector(
  [cartProductsSelector],
  (cartProducts) =>
    cartProducts.reduce(
      (currentValue: number, cartItem: CartProduct) =>
        currentValue + cartItem.price * cartItem.quantity,
      0,
    ),
)
